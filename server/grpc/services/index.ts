import { sendUnaryData, Server, ServerUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js"
import { GreetingService } from "../proto-output/protos/services_grpc_pb"
import { GreetRequest, GreetResponse } from "../proto-output/protos/services_pb"
// import { GreetingService, greetUser } from "./greeter"

 function greet(
  call: ServerUnaryCall<GreetRequest, GreetResponse>,
  cb: sendUnaryData<GreetResponse>
) {
  const reply = new GreetResponse()
  reply.setResult(call.request.getName() + " how you doing")
  cb(null, reply)
}
function registerServices(server: Server): Server {
  server.addService(GreetingService, greet)
  return server
}

export { registerServices }
