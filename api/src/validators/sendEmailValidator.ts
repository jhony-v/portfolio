import { body } from "express-validator";

export const sendEmailValidator = [
    body("from").exists().notEmpty().isEmail(),
    body("subject").exists().notEmpty(),
    body("message").exists().notEmpty(),
    body("name").exists().notEmpty()
]