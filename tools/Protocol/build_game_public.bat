@echo off
copy Protocol\game_public.proto ProtoGenPhp\game_public.proto
copy Protocol\game_public.proto ProtoGenJS\game_public.proto
copy Protocol\game_public.proto ProtoGenPython\game_public.proto

cd ProtoGenPython
protoc.exe --proto_path=./ --python_out=../Python game_public.proto     
del game_public.proto
cd ..

cd ProtoGenPhp
protoc.exe --proto_path=./ --php_out=../Php game_public.proto
del game_public.proto
cd ..

cd ProtoGenJS
protoc --js_out=library=game_public_pb,binary:../JS ./game_public.proto
del game_public.proto
cd ..

copy Python\game_public_pb2.py ..\..\server\game\*\protocol\game_public_pb2.py
copy Php\game_public.pb.php ..\..\server\alloc\Protobuf\PHP\game_public.pb.php 



pause