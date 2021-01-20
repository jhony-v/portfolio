import express from "express"
import cors from "cors"
import sendEmailController from "./controllers/sendEmailController";
import authorizationAPIMiddleware from "./middlewares/authorizationAPIMiddleware";

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/send-email',authorizationAPIMiddleware,sendEmailController);

export default app;
