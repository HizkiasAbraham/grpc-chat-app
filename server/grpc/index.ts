import { loadPackageDefinition } from "@grpc/grpc-js"
import { loadSync } from "@grpc/proto-loader"
import { readdirSync } from "fs"

const PROTO_FILES_DIR_PATH = __dirname + "/../../../protos"
const protoFileNames = readdirSync(PROTO_FILES_DIR_PATH).map(
  (fileName, _) => `${PROTO_FILES_DIR_PATH}/${fileName}`
)

export const proto = loadPackageDefinition(
  loadSync(protoFileNames, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    json: true,
  })
)
