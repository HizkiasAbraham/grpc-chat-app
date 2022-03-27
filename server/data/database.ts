import mongoose from "mongoose"
import config from "../config/index"
// import { User } from "./models/User"

function connectDb(cb: Function) {
  mongoose
    .connect(config.databaseUrl)
    .then((val) => {
      cb(null, `Connected to mongo db: ${config.databaseUrl}`)
    })
    .catch((err) => {
      cb(`Problem while connecting mongo db: ${config.databaseUrl}`)
    })
}

export { connectDb }
