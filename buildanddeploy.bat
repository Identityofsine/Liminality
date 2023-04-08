@echo off

setlocal
:PROMPT
SET /P CHANGEDIR="Edit Directory? [y,n]"
IF /I "%CHANGEDIR%" NEQ "y" IF /I "%CHANGEDIR%" NEQ "Y" GOTO INIT ELSE GOTO EDIT

:EDIT
SET /P newDIR="New Directory: "
set does_exist=0
CALL :DIREXIST %newDIR%, does_exist
if %does_exist% equ 0 (
	echo Invalid Directory
	goto :EDIT
)
set does_exist=0
CALL :DOESEXIST %does_exist%
if %does_exist% equ 1 rm .env.batch
echo %newDIR%> .env.batch
goto :INIR


:DIREXIST
if exist %~1 (
	set "%~2=1"	
) else (
	set "%~2=0"
)
goto :EOF

:INIT
set does_exist=0
CALL :DOESEXIST does_exist
if %does_exist% equ 0 GOTO EDIT

set /p dir=<.env.batch

echo "INIT"
call npm run build
echo Removing Old Contents from %dir%...
del /Q /F dir\* 
echo Moving New Build to %dir%...
xcopy /E /H /C /I .\build\* %dir%\ 
cd dir
echo Pushing to GitHub
git add .
git commit -m "Basic Commit"
git push


goto :EOF

:DOESEXIST
if exist .env.batch (
	set %1=1
) else (
	set %1=0
)
goto :EOF

	
