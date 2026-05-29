@echo off
chcp 65001 >nul
setlocal

set "YUNGE_ROOT=%~dp0"
cd /d "%YUNGE_ROOT%"

set "PYTHON=%YUNGE_ROOT%python\python.exe"

if not exist "%PYTHON%" (
    echo [ERROR] portable Python not found at %PYTHON%
    echo This release seems corrupted. Please re-extract the zip.
    pause
    exit /b 1
)

cls
echo.
echo   ============================================
echo          YUNGE Personal AI Assistant
echo   ============================================
echo.
echo   Starting server...
echo.
echo   When you see the startup banner with the YUNGE logo,
echo   open your browser to:
echo.
echo       http://localhost:6185
echo.
echo   Default login:  miku  /  miku
echo.
echo   First-time use: go to Settings to add a model API key
echo   (DeepSeek / OpenAI / Anthropic / Gemini supported).
echo.
echo   ============================================
echo.

"%PYTHON%" main.py

echo.
echo (server stopped)
pause