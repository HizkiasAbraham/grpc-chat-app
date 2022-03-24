BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../../

GRPC_TOOLS_NODE_PROTOC="./server/node_modules/.bin/grpc_tools_node_protoc"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./server/node_modules/.bin/grpc_tools_node_protoc_plugin"
PROTOC_GEN_TS_PATH="./server/node_modules/.bin/protoc-gen-ts"

PROTOC_FILES_PATH="./protos"
PROTOC_OUTPUT_PATH="./server/grpc/proto-output"


#loop over all proto files and compile
for f in ./protos/*; do
    # JS module generation
    ${GRPC_TOOLS_NODE_PROTOC} \
        --js_out=import_style=commonjs,binary:"$PROTOC_OUTPUT_PATH" \
        --grpc_out=generate_package_definition:"$PROTOC_OUTPUT_PATH" $f

    # TS type meta code generating
    ${GRPC_TOOLS_NODE_PROTOC} \
        --proto_path=$PROTOC_FILES_PATH  \
        --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}"  $f\
        --ts_out="$PROTOC_OUTPUT_PATH"/protos
done
