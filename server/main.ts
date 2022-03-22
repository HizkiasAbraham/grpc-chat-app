import { createServer, IncomingMessage, Server, ServerResponse } from "http"

const server: Server = createServer(handler)

function handler(req: IncomingMessage, res: ServerResponse): void {
  res.end("Ts Nodejs project")
}

server.listen(8400, () => {
    console.log('app started listening on port 8400')
})
