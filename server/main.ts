import { Server, ServerCredentials } from "@grpc/grpc-js"
import { protoIndex } from "./grpc/proto-output"
import { registerServices } from "./grpc/services"

protoIndex()
const port: number = 55555

function startServer() {
  let server: Server = new Server()

  server = registerServices(server)
  server.bindAsync(
    `127.0.0.1:${port}`,
    ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err != null) {
        return console.error(err)
      }
      console.log(`gRPC listening on ${port}`)
    }
  )
}

startServer()
