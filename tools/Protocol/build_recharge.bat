@echo off
copy Protocol\recharge.proto ProtoGenPhp\recharge.proto
copy Protocol\recharge.proto ProtoGenJS\recharge.proto

cd ProtoGenPhp
protoc.exe --proto_path=./ --php_out=../Php recharge.proto
del recharge.proto
cd ..

cd ProtoGenJS
protoc --js_out=library=recharge_pb,binary:. ./recharge.proto
del recharge.proto
cd ..

copy Php\recharge.pb.php F:\xampp\htdocs\server\recharge\Protobuf\PHP\recharge.pb.php

copy ProtoGenJS\recharge_pb.js JS\recharge_pb.js
copy ProtoGenJS\recharge_pb.js E:\h5_qp\hlddz\hlddz_client\assets\scripts\protobuf\recharge_pb.js

pause