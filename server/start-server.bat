@echo off
cd /d %~dp0
echo Starting VideoControl Server...
node server.js
pause