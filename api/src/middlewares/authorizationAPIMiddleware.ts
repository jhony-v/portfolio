import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator";
import { AUTHORIZATION_KEY } from "../config/envs";
import { sendEmailValidator } from "../validators/sendEmailValidator";

const validationAPIMiddlewareFunction = (req : Request,res : Response,  next : NextFunction) => {
    const errors = validationResult(req);
    const key = req.headers.authorization?.replace("Bearer ","");
    if(!errors.isEmpty())  return res.status(400).json({errors:errors.array()});
    if(key !== AUTHORIZATION_KEY) return res.status(401).json({errors:{message:'Unauthorized API'}})
    next();

}

const authorizationAPIMiddleware = [...sendEmailValidator,validationAPIMiddlewareFunction]
export default authorizationAPIMiddleware;