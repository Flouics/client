@echo off
copy Protocol\login.proto ProtoGenPhp\login.proto
copy Protocol\login.proto ..\..\client\src\protobuf\login.proto

cd ProtoGenPhp
protoc.exe --proto_path=./ --python_out=../Php login.proto
del login.proto
cd ..

copy Php\login.pb.php ..\..\server\login\Protobuf\PHP\login.pb.php

pause