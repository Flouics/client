@echo off
copy Protocol\login.proto ProtoGenPhp\login.proto
copy Protocol\login.proto ProtoGenJS\login.proto

cd ProtoGenPhp
protoc.exe --proto_path=./ --php_out=../Php login.proto
del login.proto
cd ..

cd ProtoGenJS
protoc --js_out=library=login_pb,binary:. ./login.proto
del login.proto
cd ..

copy Php\login.pb.php F:\xampp\htdocs\server\login\Protobuf\PHP\login.pb.php
copy Php\login.pb.php F:\xampp\htdocs\server\alloc\Protobuf\PHP\login.pb.php

copy ProtoGenJS\login_pb.js JS\login_pb.js
copy ProtoGenJS\login_pb.js E:\h5_qp\hlddz\hlddz_client\assets\scripts\protobuf\login_pb.js

pause