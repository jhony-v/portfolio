import SendEmailAdapter, { EmailProps } from "../adapters/SendEmailAdapter";
import nodemailer from "nodemailer"
import { AUTHORIZATION_USER, AUTHORIZATION_PASSWORD } from "../config/envs";

interface SendEmailTemplateProps extends EmailProps {
    html : string;
}

export default class SendEmailService implements SendEmailAdapter<SendEmailTemplateProps> {
    private toEmail : string;
    constructor(toEmail : string) {
        this.toEmail = toEmail; 
    }

    async send(emailProps : SendEmailTemplateProps) : Promise<any> {
        const { from , subject, html } = emailProps;
        const transporter = nodemailer.createTransport({
            host : "smtp.gmail.com",
            secure : false,
            auth : {
                user : AUTHORIZATION_USER,
                pass : AUTHORIZATION_PASSWORD
            }
        });
        await transporter.sendMail({
            from : from,
            to : this.toEmail,
            subject : subject,
            html : html
        });
        return true;
    }
}
