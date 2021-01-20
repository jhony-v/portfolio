import { Request, Response } from "express";
import RenderTemplateEmailService from "../services/RenderTemplateEmailService";
import SendEmailService from "../services/SendEmailService";
import { AUTHORIZATION_USER } from "../config/envs"

export default async function sendEmailController(req : Request, res : Response) {

    const sendEmailService = new SendEmailService(AUTHORIZATION_USER || "");
    const renderTemplateService = new RenderTemplateEmailService();

    try {
        const html = renderTemplateService.render(__dirname+"/../templates/email_template.pug").replace(req.body);
        await sendEmailService.send({ ...req.body, html });
        return res.json({sent:true});
    }
    catch(e) {
        return res.status(400).json({sent:false,message:"Email not sent"});
    }

}
