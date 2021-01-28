import dotenv from "dotenv"
dotenv.config()
import server from "./server"

const PORT = process.env.PORT || 7000;
server.listen(PORT)