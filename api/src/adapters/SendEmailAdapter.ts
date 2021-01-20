export interface EmailProps {
    from? : string;
    name? : string;
    subject : string;
    message : string;
}

export default interface SendEmailAdapter<T_Email_Props> {
    send : (data : T_Email_Props) => Promise<any>
}