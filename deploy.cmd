@echo off

echo installing npm modules
call npm install

echo cleaning artefacts
call npm run clean

echo running build
call npm run build

echo compiling server and app
call npm run server:prod

echo build script finished.