import React,{ useEffect, useRef, useState } from "react";

const url = "https://jhony-portfolio-api.herokuapp.com/send-email";

type Status = "error" | "success" | "empty" | "";
type EditTextElement = HTMLInputElement & HTMLTextAreaElement;

export default function useSendMail() {
    const name = useRef<EditTextElement>();
    const email = useRef<EditTextElement>();
    const subject = useRef<EditTextElement>();
    const message = useRef<EditTextElement>();
    const [ status, setStatus ] = useState<Status>("");
    const [ loading, setLoading ] = useState<boolean>(false);
  
    const checkIssetFields = () => [email,subject,message].every(e => e.current.value.trim() !== "");
    const clearFields = () => [email,subject,name,message].forEach(e => e.current.value = "");
  
    const isStatus = (payloadStatus : Status) => status === payloadStatus;
    
    const onSendMessage = async () => {
        if(checkIssetFields()) {
          const params = {
            name : name.current.value,
            email : email.current.value,
            subject : subject.current.value,
            message : message.current.value,
          }
          
          try {
            setLoading(true);
            const fetchRequest = await fetch(url,{
              method : "POST",
              headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer 3ohjpojt4ty82ty3047t43t83byfoqgeihit9ra90eeu0fjoht34983948g349gn8hgegnvsonlsnoij101804t249tjfmmff001miofheoiqhoeww2ru02u320bum20u',
              },
              body : JSON.stringify(params),
            });
            const { sent } = await fetchRequest.json();
            if(sent) {
              setStatus("success");
              clearFields();
            } 
            else setStatus("error");
          }
          catch {
            setStatus("error");
          }
          finally {
            setLoading(false);
          }
        }
        else {
          setStatus("empty");
        }
    }

    useEffect(() => {
      if(status !== "") {
       const timeOut = setTimeout(() => {
        setStatus("");
       },4000); 
       return () => {
         clearTimeout(timeOut);
       }
      }
    },[status]);
    
    return {
        onSendMessage,
        loading,
        status,
        props : {
            name ,
            email ,
            subject ,
            message ,
        },
        isStatus
    }
}
