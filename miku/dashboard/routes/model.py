"""
模型自检 API —— 扫描本地运行的模型服务 (Ollama / vLLM) 并返回可用模型列表。

端点:
    GET /api/model/scan

请求参数 (query string):
    - target (str, optional): 逗号分隔的目标服务，默认 "ollama,vllm"
      可选值: ollama, vllm
    - ollama_host (str, optional): Ollama 主机地址，默认 "http://localhost:11434"
    - vllm_host (str, optional): vLLM 主机地址，默认 "http://localhost:8000"

返回:
    {
        "status": "ok",
        "data": {
            "ollama": ["qwen2:7b", "llama3:8b", ...],
            "vllm": ["Qwen/Qwen2-7B-Instruct", ...],
            "all": [...]
        }
    }
"""

import httpx

from .route import Response, Route


class ModelRoute(Route):
    def __init__(self, context) -> None:
        super().__init__(context)
        self.routes = {
            "/model/scan": ["GET", self.scan_models],
        }
        self.register_routes()

    async def _fetch_ollama_models(self, host: str) -> list[str]:
        """从 Ollama /api/tags 获取模型列表。"""
        url = f"{host.rstrip('/')}/api/tags"
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                resp = await client.get(url)
                if resp.status_code == 200:
                    data = resp.json()
                    models = data.get("models", [])
                    return [m["name"] for m in models if m.get("name")]
                return []
        except Exception:
            return []

    async def _fetch_vllm_models(self, host: str) -> list[str]:
        """从 vLLM /v1/models 获取模型列表。"""
        url = f"{host.rstrip('/')}/v1/models"
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                resp = await client.get(url)
                if resp.status_code == 200:
                    data = resp.json()
                    models = data.get("data", [])
                    return [m["id"] for m in models if m.get("id")]
                return []
        except Exception:
            return []

    async def scan_models(self):
        """GET /api/model/scan"""
        from quart import request

        targets = (request.args.get("target", "ollama,vllm")).split(",")
        targets = [t.strip().lower() for t in targets]

        ollama_host = request.args.get("ollama_host", "http://localhost:11434")
        vllm_host = request.args.get("vllm_host", "http://localhost:8000")

        result = {"ollama": [], "vllm": [], "all": []}

        if "ollama" in targets:
            result["ollama"] = await self._fetch_ollama_models(ollama_host)

        if "vllm" in targets:
            result["vllm"] = await self._fetch_vllm_models(vllm_host)

        result["all"] = result["ollama"] + result["vllm"]

        return Response().ok(result).__dict__
