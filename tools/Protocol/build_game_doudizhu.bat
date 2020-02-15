@echo off
copy Protocol\game.proto ProtoGenPhp\game.proto
copy Protocol\game.proto ProtoGenJS\game.proto
copy Protocol\game.proto ProtoGenPython\game.proto

cd ProtoGenPython
protoc.exe --proto_path=./ --python_out=../Python game.proto     
del game.proto
cd ..

cd ProtoGenPhp
protoc.exe --proto_path=./ --php_out=../Php game.proto
del game.proto
cd ..

cd ProtoGenJS
protoc --js_out=library=game_pb,binary:../JS ./game.proto
del game.proto
cd ..

rem copy Python\game_pb2.py ..\..\game\protocol\game_pb2.py

copy Php\game.pb.php F:\xampp\htdocs\server\login\Protobuf\PHP\game.pb.php
copy Php\game.pb.php F:\xampp\htdocs\server\alloc\Protobuf\PHP\game.pb.php

copy Python\game_pb2.py E:\h5_qp\hlddz\hlddz_server\game\protocol\game_pb2.py
copy JS\game_pb.js E:\h5_qp\hlddz\hlddz_client\assets\scripts\protobuf\game_pb.js



pause