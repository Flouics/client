@ echo off  
echo open super admin
%1 %2  
ver|find "5.">nul&&goto :st  
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :st","","runas",1)(window.close)&goto :eof  
:st  
copy "%~0" "%windir%\system32\"  
:Start
set workPath=%~dp0
set wact=%workPath%\cocos\kingClient\act
set wres=%workPath%\cocos\kingClient\res
set wskin=%workPath%\cocos\kingClient\skin
set wstu=%workPath%\cocos\kingClient\stu
set confPath=%workPath%\res\skin
set /p myCHOOSE="please choose[1.res 2.protocol 3.language 4.conf 5.export 6.git ......]:"
if "%myCHOOSE%"=="1" goto RES
if "%myCHOOSE%"=="2" goto PROTOCOL
if "%myCHOOSE%"=="3" goto LANGUAGE
if "%myCHOOSE%"=="4" goto CONF
if "%myCHOOSE%"=="5" goto EXPORT
if "%myCHOOSE%"=="6" goto GIT
goto end

:RES
set /p resPath="please enter path:"

if exist %workPath%\res\skin\%resPath% (

    if exist %wact% (
        rmdir %wact%
    )
    if exist %wres% (
        rmdir %wres%
    )
    if exist %wskin% (
        rmdir %wskin%
    )
    if exist %wstu% (
        rmdir %wstu%
    )
    if exist %workPath%\res\skin\%resPath%\act (
        mklink /D %wact% %confPath%\%resPath%\act
    )
    mklink /D %wres% %confPath%\%resPath%\res
    mklink /D %wskin% %confPath%\%resPath%\skin
    mklink /D %wstu% %confPath%\%resPath%\stu
) else (
    echo "not exist files"
)
goto Start

:PROTOCOL
set /p resPath="please enter path:"
echo "new protocol"
if exist %confPath%\%resPath%\proto.json (
    java -jar %workPath%\tool\kingdata.jar %confPath%\%resPath%\proto.json %workPath%/
    ) else (
    echo "not exist files"
)
echo "new protocol end"
goto Start

:PROTOCOLNOHTML
set /p resPath="please enter path:"
echo "new protocol"
if exist %confPath%\%resPath%\proto.json (
    java -jar %workPath%\tool\kingdatanohtml.jar %confPath%\%resPath%\proto.json %workPath%/
    ) else (
    echo "not exist files"
)
echo "new protocol end"
goto Start

:PROTOCOLNEW
set /p resPath="please enter path:"
echo "new protocol"
if exist %confPath%\%resPath%\proto.json (
    %workPath%\tool\kingdata.exe %confPath%\%resPath%\proto.json %workPath%
    ) else (
    echo "not exist files"
)
echo "new protocol end"
goto Start

:LANGUAGE
set /p resPath="please enter path:"
echo "new language"
if exist %confPath%\%resPath%\lang.json (
    java -jar %workPath%\tool\KingLanguage.jar %confPath%\%resPath%\lang.json %workPath%/
    ) else (
    echo "not exist files"
)
echo "new language end"
goto Start
:CONF
set /p resPath="please enter path:"
if exist %confPath%\%resPath%\client.xls (
    java -jar %workPath%\tool\xls2Lua.jar %confPath%\%resPath%\client.xls %workPath%/
) else (
    echo "not exist files"
)
goto Start
:CONF_FAST
set /p resPath="please enter path:"
if exist %confPath%\%resPath%\client.xls (
    java -jar %workPath%\tool\xls2Lua_md5.jar %confPath%\%resPath%\client.xls %workPath%/
) else (
    echo "not exist files"
)
goto Start
:All
set /p resPath="please enter path:"

    java -jar %workPath%\tool\xls2Lua.jar %confPath%\%resPath%\client.xls %workPath%/
    java -jar %workPath%\tool\KingLanguage.jar %confPath%\%resPath%\lang.json %workPath%/
    java -jar %workPath%\tool\kingdata.jar %confPath%\%resPath%\proto.json %workPath%/

goto Start
:PACK
set /p resPath="please enter path:"

echo "packing"
python %workPath%/flash/autobuild/tools_code/newlib/build_andr.py ^
        "pureCode" ^
        "%workPath%/cocos/kingClient" ^
        --skin "%workPath%/res/skin" %resPath% "NULL" ^
        --gateway "http://cdn.hnyoulu.com/king/%resPath%/gw/pure.json"  ^
        --fixPath "%workPath%/cocos/fix" ^
        --getDis "1" ^
        --OPName "local" ^
        --OPChannel "local" ^
        --ydappid "189" ^
        --appname "%resPath%测试包" ^
        --package "com.%resPath%.pure" ^
        --version "1.0.1" "1000" ^
        --ResSignSn "%resPath%  10000" ^
        --mulrProjConfig "%resPath%" ^
        --apkprefix "pure"

echo "packed"
goto Start

:CONF_CHECK
set /p resPath="please enter path:"
if exist %confPath%\%resPath%\client_check.xls (
    java -jar %workPath%\tool\xls2Lua.jar %confPath%\%resPath%\client_check.xls %workPath%/
) else (
    echo "not exist files"
)
goto Start

:EXPORT
call  %workPath%\tool\export\export.bat 1
goto Start

:GIT
set /p myCHOOSE="please choose[1.config 2.protocol ...]:"
if "%myCHOOSE%"=="1" goto updateConfig
if "%myCHOOSE%"=="2" goto updateProtocol
goto end

:updateConfig
call resetConfig.bat 1
goto Start

:updateProtocol
call resetProtocol.bat 1
goto Start

:end
goto Start

exit
