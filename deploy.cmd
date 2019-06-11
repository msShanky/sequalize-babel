@echo off

echo installing npm modules
call npm install

echo cleaning artefacts
call npm run clean

echo compiling server and app
call npm run build

echo build script finished.