@echo off
cd /d "%~dp0"
echo Instalando dependencias, se necessario...
call npm install
echo Abrindo Centro Integrado de Fisioterapia em http://localhost:3000
call npm run dev
pause
