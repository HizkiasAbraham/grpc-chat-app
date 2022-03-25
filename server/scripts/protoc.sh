BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../../

PROTO_LOADER_GEN_TYPES=./server/node_modules/.bin/proto-loader-gen-types


#loop over all proto files and compile
for f in ./protos/*; do
   $PROTO_LOADER_GEN_TYPES \
        --longs=String \
        --enums=String  \
        --defaults \
        --oneofs \
        --grpcLib=@grpc/grpc-js \
        --outDir=./server/grpc/proto-output $f
done
