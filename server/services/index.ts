import { Server } from "@grpc/grpc-js"
import authentication from "./authentication"

function registerServices(server: Server): Server {
  server.addService(authentication.service, authentication.handler)
  return server
}

export { registerServices }
