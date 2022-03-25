import { Server, ServerCredentials } from "@grpc/grpc-js"
import { registerServices } from "./services"

// protoIndex()
const port: number = 55555

function startServer() {
  let server: Server = new Server()

  server = registerServices(server)
  server.bindAsync(
    "0.0.0.0:55299",
    ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err != null) {
        return console.error(err)
      }
      server.start()
      console.log(`gRPC Server listening on ${port}`)
    }
  )
}

startServer()
