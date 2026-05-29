# -*- coding: utf-8 -*-
"""
实验项目1：爬虫案例——巨潮网年报爬取
功能：根据股票代码爬取巨潮网内公司年报信息，使用线程池（6线程）执行采集任务，数据存储到CSV文件中。

技术要点：
1. 巨潮网公告查询API: POST https://www.cninfo.com.cn/new/hisAnnouncement/query
2. 需要先获取JSESSIONID Cookie（访问搜索页面）
3. 请求需要携带 X-Requested-With: XMLHttpRequest 等AJAX头
4. 使用searchkey自动发现正确的orgId，避免硬编码
"""

import requests
import json
import csv
import os
import time
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime

# ==================== 配置 ====================

# 输出CSV文件路径
OUTPUT_CSV = "cninfo_annual_reports.csv"

# 线程池大小
THREAD_POOL_SIZE = 6

# 请求间隔（秒）
REQUEST_DELAY = 0.5

# 每个股票代码最大爬取页数
MAX_PAGES = 20

# 每页记录数（最大30）
PAGE_SIZE = 30

# 年报分类代码
CATEGORY_ANNUAL_REPORT = "category_ndbg_szsh"

# ==================== 工具函数 ====================

print_lock = threading.Lock()


def safe_print(*args, **kwargs):
    """线程安全的打印函数"""
    with print_lock:
        print(*args, **kwargs)


# 常见股票代码与公司名称的映射（用于通过searchkey搜索发现orgId）
STOCK_NAME_MAP = {
    # 深市主板
    "000001": "平安银行", "000002": "万科", "000063": "中兴通讯",
    "000333": "美的集团", "000651": "格力电器", "000858": "五粮液",
    "000725": "京东方", "002415": "海康威视", "002594": "比亚迪",
    "002230": "科大讯飞", "002475": "立讯精密", "002714": "牧原股份",
    "000568": "泸州老窖", "000338": "潍柴动力",
    # 深市创业板
    "300750": "宁德时代", "300059": "东方财富", "300124": "汇川技术",
    "300015": "爱尔眼科", "300274": "阳光电源", "300760": "迈瑞医疗",
    # 沪市主板
    "600519": "贵州茅台", "601318": "中国平安", "600036": "招商银行",
    "601398": "工商银行", "600276": "恒瑞医药", "603259": "药明康德",
    "601166": "兴业银行", "600900": "长江电力", "600030": "中信证券",
    "601857": "中国石油", "601288": "农业银行", "600887": "伊利股份",
    "601899": "紫金矿业", "600809": "山西汾酒", "600028": "中国石化",
    # 沪市科创板
    "688981": "中芯国际", "688111": "金山办公", "688012": "中微公司",
    "688036": "传音控股", "688256": "寒武纪",
}


def get_company_name(stock_code):
    """获取股票代码对应的公司名称"""
    return STOCK_NAME_MAP.get(stock_code.strip(), None)


def get_column(stock_code):
    """
    根据股票代码确定所属板块。

    规则：
    - 000xxx-004xxx: 深市主板 (szse)
    - 300xxx-301xxx: 深市创业板 (szse)
    - 600xxx-605xxx: 沪市主板 (sse)
    - 688xxx: 沪市科创板 (sse)
    - 8xxxxx, 4xxxxx: 北交所 (bj)
    """
    code = stock_code.strip()
    if code.startswith(("000", "001", "002", "003", "004", "300", "301")):
        return "szse"
    elif code.startswith(("600", "601", "603", "605", "688")):
        return "sse"
    elif code.startswith(("8", "4")):
        return "bj"
    else:
        return "szse"


# ==================== 核心爬虫类 ====================

class CninfoCrawler:
    """巨潮网年报爬虫"""

    def __init__(self):
        self.session = None
        self.org_id_cache = {}  # 缓存已发现的orgId
        self._init_session()

    def _init_session(self):
        """初始化HTTP会话，获取必要的cookies（JSESSIONID）"""
        self.session = requests.Session()
        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        }
        try:
            self.session.get(
                "https://www.cninfo.com.cn/new/commonUrl/pageOfSearch?url=disclosure/list/search",
                headers=headers,
                timeout=15
            )
        except Exception as e:
            safe_print(f"[警告] 初始化session时出错: {e}")

    def _get_api_headers(self):
        """获取API请求所需的AJAX请求头"""
        return {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            ),
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "https://www.cninfo.com.cn/new/commonUrl/pageOfSearch?url=disclosure/list/search",
            "Origin": "https://www.cninfo.com.cn",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }

    def _post_query(self, form_data):
        """
        执行POST请求到公告查询API。

        :param form_data: 表单参数字典
        :return: JSON数据或None
        """
        url = "https://www.cninfo.com.cn/new/hisAnnouncement/query"
        try:
            resp = self.session.post(
                url,
                headers=self._get_api_headers(),
                data=form_data,
                timeout=30
            )
            if resp.status_code == 200:
                resp.encoding = 'utf-8'
                return json.loads(resp.text)
            elif resp.status_code == 403:
                safe_print(f"[重新登录] Session过期，正在刷新...")
                self._init_session()
                # 重试一次
                resp = self.session.post(
                    url, headers=self._get_api_headers(),
                    data=form_data, timeout=30
                )
                if resp.status_code == 200:
                    resp.encoding = 'utf-8'
                    return json.loads(resp.text)
                return None
            else:
                return None
        except (requests.RequestException, json.JSONDecodeError) as e:
            safe_print(f"[请求错误] {e}")
            return None

    def discover_org_id(self, stock_code):
        """
        通过搜索公司名称来发现正确的orgId和stock参数格式。

        巨潮网的orgId并非简单的"前缀+0+股票代码"规则，而是内部的唯一标识。
        例如：美的集团(000333)的orgId是"9900005965"而非"gssz0000333"。

        这个方法通过searchkey查询来发现正确的orgId。

        :param stock_code: 股票代码
        :return: (stock_param, org_id, column) 或 (None, None, None)
        """
        # 检查缓存
        if stock_code in self.org_id_cache:
            return self.org_id_cache[stock_code]

        company_name = get_company_name(stock_code)
        if not company_name:
            return None, None, None

        column = get_column(stock_code)

        # 使用公司名称+年度报告作为搜索关键词
        form_data = {
            "pageNum": "1",
            "pageSize": "3",
            "column": column,
            "tabName": "fulltext",
            "plate": "",
            "stock": "",
            "searchkey": f"{company_name} 年度报告",
            "secid": "",
            "category": CATEGORY_ANNUAL_REPORT,
            "trade": "",
            "seDate": "",
            "sortName": "",
            "sortType": "",
            "isHLtitle": "true",
        }

        result = self._post_query(form_data)
        if result and result.get("announcements"):
            ann = result["announcements"][0]
            org_id = ann.get("orgId", "")
            sec_code = ann.get("secCode", "")

            # 构建stock参数（格式: "股票代码,orgId"）
            if org_id:
                stock_param = f"{sec_code},{org_id}"
                self.org_id_cache[stock_code] = (stock_param, org_id, column)
                safe_print(f"  [发现orgId] {stock_code} → orgId={org_id}")
                return stock_param, org_id, column

        return None, None, None

    def query_announcements(self, stock_code, page_num=1, page_size=PAGE_SIZE,
                             se_date=""):
        """
        查询股票的年报公告。

        优先使用已发现的orgId进行精确查询；如果尚未发现，则先尝试发现orgId。

        :param stock_code: 股票代码
        :param page_num: 页码
        :param page_size: 每页记录数
        :param se_date: 日期范围筛选
        :return: API响应的JSON数据，失败返回None
        """
        # 检查是否有缓存
        if stock_code in self.org_id_cache:
            stock_param, org_id, column = self.org_id_cache[stock_code]
        else:
            # 尝试发现orgId
            stock_param, org_id, column = self.discover_org_id(stock_code)
            if not stock_param:
                safe_print(f"[失败] {stock_code}: 无法发现orgId（公司名称未知或搜索无结果）")
                return None

        form_data = {
            "pageNum": str(page_num),
            "pageSize": str(page_size),
            "column": column,
            "tabName": "fulltext",
            "plate": "",
            "stock": stock_param,
            "searchkey": "",
            "secid": "",
            "category": CATEGORY_ANNUAL_REPORT,
            "trade": "",
            "seDate": se_date,
            "sortName": "",
            "sortType": "",
            "isHLtitle": "true",
        }

        return self._post_query(form_data)

    def collect_annual_reports(self, stock_code, max_pages=MAX_PAGES):
        """
        采集指定股票的所有年报信息。

        :param stock_code: 股票代码
        :param max_pages: 最大爬取页数
        :return: 年报信息列表
        """
        all_reports = []

        # 第1页：获取总数
        result = self.query_announcements(stock_code, page_num=1)
        if result is None:
            safe_print(f"[失败] {stock_code}: 无法获取数据")
            return all_reports

        total_announcements = result.get("totalAnnouncement", 0)
        total_pages = result.get("totalpages", 0)

        if total_announcements == 0:
            safe_print(f"[无数据] {stock_code}: 未找到年报信息")
            return all_reports

        # 处理第1页
        for ann in result.get("announcements", []):
            all_reports.append(self._parse_announcement(ann, stock_code))

        pages_to_fetch = min(total_pages, max_pages)
        safe_print(
            f"[采集] {stock_code}: 共{total_announcements}条, "
            f"{total_pages}页, 计划爬取{pages_to_fetch}页"
        )

        # 爬取剩余页面
        for page in range(2, pages_to_fetch + 1):
            time.sleep(REQUEST_DELAY)
            result = self.query_announcements(stock_code, page_num=page)
            if result is None:
                safe_print(f"[跳过] {stock_code}: 第{page}页获取失败")
                break
            for ann in result.get("announcements", []):
                all_reports.append(self._parse_announcement(ann, stock_code))

            safe_print(f"[进度] {stock_code}: 第{page}/{pages_to_fetch}页完成")

        safe_print(f"[完成] {stock_code}: 共采集{len(all_reports)}条年报")
        return all_reports

    def _parse_announcement(self, ann, stock_code):
        """
        解析单条公告数据为字典格式。

        :param ann: API返回的公告JSON对象
        :param stock_code: 股票代码
        :return: 格式化的字典
        """
        timestamp = ann.get("announcementTime", 0)
        if timestamp and timestamp > 0:
            try:
                date_str = datetime.fromtimestamp(timestamp / 1000).strftime("%Y-%m-%d")
            except (OSError, ValueError):
                date_str = str(timestamp)
        else:
            date_str = "未知"

        adjunct_url = ann.get("adjunctUrl", "")
        pdf_url = f"https://static.cninfo.com.cn/{adjunct_url}" if adjunct_url else ""

        return {
            "股票代码": stock_code,
            "股票简称": ann.get("secName", ""),
            "公告ID": ann.get("announcementId", ""),
            "公告标题": ann.get("announcementTitle", ""),
            "公告时间": date_str,
            "时间戳": timestamp,
            "PDF链接": pdf_url,
            "PDF大小(KB)": ann.get("adjunctSize", ""),
            "板块": ann.get("pageColumn", ""),
            "公告类型代码": ann.get("announcementType", ""),
            "orgId": ann.get("orgId", ""),
        }


# ==================== 线程池采集函数 ====================

def collect(stock_code):
    """
    采集单个股票代码的年报数据（供线程池调用）。

    :param stock_code: 股票代码
    :return: (stock_code, reports_list) 元组
    """
    safe_print(f"[线程启动] 开始采集: {stock_code}")
    crawler = CninfoCrawler()
    reports = crawler.collect_annual_reports(stock_code)
    safe_print(f"[线程结束] {stock_code}: 采集到{len(reports)}条记录")
    return stock_code, reports


# ==================== CSV写入 ====================

def save_to_csv(all_reports, output_path=OUTPUT_CSV):
    """
    将所有年报数据保存到CSV文件。

    :param all_reports: 年报数据列表
    :param output_path: 输出文件路径
    """
    if not all_reports:
        print("\n[提示] 没有数据需要保存")
        return

    fieldnames = [
        "股票代码", "股票简称", "公告ID", "公告标题", "公告时间",
        "时间戳", "PDF链接", "PDF大小(KB)", "板块", "公告类型代码", "orgId"
    ]

    with open(output_path, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(all_reports)

    abs_path = os.path.abspath(output_path)
    print(f"\n[保存成功] CSV文件已保存到: {abs_path}")
    print(f"[统计] 共{len(all_reports)}条年报记录")


# ==================== 主函数 ====================

def main():
    """主函数：使用线程池（6线程）执行年报采集任务。"""
    print("=" * 60)
    print("  巨潮网年报爬虫 - Cninfo Annual Report Crawler")
    print("=" * 60)
    print()

    # ========== 股票代码列表（可按需修改）==========
    stock_codes = [
        # 深市主板
        "000001",  # 平安银行
        "000002",  # 万科A
        "000333",  # 美的集团
        "000651",  # 格力电器
        "000858",  # 五粮液
        "000725",  # 京东方A
        "002415",  # 海康威视
        "002594",  # 比亚迪
        # 深市创业板
        "300750",  # 宁德时代
        "300059",  # 东方财富
        "300124",  # 汇川技术
        # 沪市主板
        "600519",  # 贵州茅台
        "601318",  # 中国平安
        "600036",  # 招商银行
        "601398",  # 工商银行
        "600276",  # 恒瑞医药
        "600900",  # 长江电力
        "600030",  # 中信证券
        "601857",  # 中国石油
        # 沪市科创板
        "688981",  # 中芯国际
        "688111",  # 金山办公
    ]

    print(f"[配置] 待采集股票数量: {len(stock_codes)}")
    print(f"[配置] 线程池大小: {THREAD_POOL_SIZE}")
    print(f"[配置] 最大页数/股: {MAX_PAGES}")
    print(f"[配置] 输出文件: {OUTPUT_CSV}")
    print()

    all_reports = []
    success_count = 0
    fail_count = 0
    start_time = time.time()

    # ====== 创建线程池（线程数为6）执行collect函数 ======
    with ThreadPoolExecutor(max_workers=THREAD_POOL_SIZE) as executor:
        # 提交所有任务
        future_to_stock = {
            executor.submit(collect, code): code
            for code in stock_codes
        }

        # 处理完成的任务
        for future in as_completed(future_to_stock):
            stock_code = future_to_stock[future]
            try:
                code, reports = future.result()
                if reports:
                    all_reports.extend(reports)
                    success_count += 1
                else:
                    fail_count += 1
            except Exception as e:
                safe_print(f"[异常] {stock_code}: {e}")
                fail_count += 1

    elapsed_time = time.time() - start_time

    # 按股票代码和公告时间排序（最新在前）
    all_reports.sort(
        key=lambda x: (x["股票代码"], x.get("时间戳", 0)),
        reverse=True
    )

    # 保存到CSV
    save_to_csv(all_reports)

    # ====== 统计信息 ======
    print("\n" + "=" * 60)
    print("  采集完成统计")
    print("=" * 60)
    print(f"  总股票数: {len(stock_codes)}")
    print(f"  成功采集: {success_count}")
    print(f"  失败数量: {fail_count}")
    print(f"  总记录数: {len(all_reports)}")
    print(f"  总耗时:   {elapsed_time:.2f} 秒")
    print("=" * 60)

    # 各股票汇总
    print("\n[各股票采集结果汇总]")
    stock_summary = {}
    for report in all_reports:
        code = report["股票代码"]
        name = report["股票简称"]
        key = f"{code} {name}"
        stock_summary[key] = stock_summary.get(key, 0) + 1

    for key, count in sorted(stock_summary.items()):
        print(f"  {key}: {count}条年报")

    # 失败的股票
    successful_codes = set(r["股票代码"] for r in all_reports)
    failed_codes = [c for c in stock_codes if c not in successful_codes]
    if failed_codes:
        print(f"\n[未采集到数据的股票]: {', '.join(failed_codes)}")


if __name__ == "__main__":
    main()
