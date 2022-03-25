import { config } from "dotenv"
config()

const { PORT, DATABASE_URL } = process.env

export default {
  serverPort: PORT || 60604,
  databaseUrl: DATABASE_URL || "",
}
