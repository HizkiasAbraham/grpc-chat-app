import { ProtoGrpcType } from "../../grpc/protos/authentication"
import { proto } from "../../grpc"
import { authenticationHandlers } from "./handlers"

const authProto = proto as unknown as ProtoGrpcType
const Authentication = authProto.authentication.Authentication

export default {
  service: Authentication.service,
  handler: authenticationHandlers,
}
