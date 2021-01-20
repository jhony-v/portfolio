import dotenv from "dotenv"
dotenv.config()
import server from "./server"

const PORT = 7000 || process.env.PORT;
server.listen(PORT)