import React, { useEffect, useRef, useState } from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import EditTextControl from "common/FormControls/Inputs/EditTextControl"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"
import FloatingAlertMessage from "../components/FloatingAlertMessage";
import CircleLoading from "../components/CircleLoading";


const url = "https://jhony-portfolio-api.herokuapp.com/send-email";

type Status = "error" | "success" | "empty" | "";
type EditTextElement = HTMLInputElement & HTMLTextAreaElement;

const ContactForm = () => {
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

  return (
    <div className="contact__form md:px-20 md:w-3/4">
      <TitleLayerInformation title="Contact me" />
      <div className="grid sm:grid-cols-2 gap-5 mt-12 mb-10">
        <EditTextControl ref={name} placeholder="Name / Optional" className="col-span-2 sm:col-auto" />
        <EditTextControl ref={email} placeholder="Email" className="col-span-2 sm:col-auto" />
        <EditTextControl ref={subject} placeholder="Subject" className="col-span-2" />
        <EditTextControl ref={message} placeholder="Message" className="col-span-2 h-40" as="textarea" />
      </div>
      <div className="flex justify-end">
          <BasePrimaryButton onClick={onSendMessage}>
            {loading ? "SENDING..." : "SEND MESSAGE"}
            {loading && <CircleLoading className="ml-5" />}
          </BasePrimaryButton>
      </div>
      <FloatingAlertMessage visible={isStatus("success")} variant="success" message="Your message has sent to Jhony, Thanks" title="Very good" />
      <FloatingAlertMessage visible={isStatus("error")} variant="error" message="Ups!, Your message has not sent to Jhony" title="An error ocurred" />
      <FloatingAlertMessage visible={isStatus("empty")} variant="warning" message="To send a message you need to type in the fields" title="Complete all fields" />
    </div>
  )
}

export default ContactForm
