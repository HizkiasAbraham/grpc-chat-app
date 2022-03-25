import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

import { ProtoGrpcType } from "./proto-output/services"
import { GreetingHandlers } from "./proto-output/greeter/Greeting"
import { GreetRequest } from "./proto-output/greeter/GreetRequest"
import { GreetResponse } from "./proto-output/greeter/GreetResponse"

const packageDef = protoLoader.loadSync(__dirname + "/services.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  json: true,
})
const proto = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType

const greetingServer: GreetingHandlers = {
  GreetUser: function (
    call: grpc.ServerUnaryCall<GreetRequest, GreetResponse>,
    callback: grpc.sendUnaryData<GreetResponse>
  ): void {
    console.log("oy89yu98y")
    const resp: GreetResponse = {
      result: "Here we go" + call.request.name,
    }
    callback(null, resp)
  },
}

const server = new grpc.Server({})

server.addService(proto.greeter.Greeting.service, greetingServer)

server.bindAsync(
  "0.0.0.0:55259",
  grpc.ServerCredentials.createInsecure(),
  (_err: Error | null, _port: number) => {
    console.log("server started  listening at ", _port)
  }
)
