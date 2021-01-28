import React, { useRef, useState } from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import EditTextControl from "common/FormControls/Inputs/EditTextControl"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"

type EditTextElement = HTMLInputElement & HTMLTextAreaElement;
const ContactForm = () => {
  const name = useRef<EditTextElement>();
  const email = useRef<EditTextElement>();
  const subject = useRef<EditTextElement>();
  const message = useRef<EditTextElement>();
  const [ status, setStatus ] = useState<"error" | "success" | "empty" | "">("");
  const checkIssetFields = () => [email,subject,message].every(e => e.current.value.trim() !== "");

  const onSendMessage = async () => {
    if(checkIssetFields()) {
      const params = {
        name : name.current.value,
        email : email.current.value,
        subject : subject.current.value,
        message : message.current.value,
      }
      
      try {
        const fetchRequest = await fetch("https://jhony-portfolio-api.herokuapp.com/send-email",{
          method : "POST",
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer 3ohjpojt4ty82ty3047t43t83byfoqgeihit9ra90eeu0fjoht34983948g349gn8hgegnvsonlsnoij101804t249tjfmmff001miofheoiqhoeww2ru02u320bum20u',
          },
          body : JSON.stringify(params),
        });
        const { data } = await fetchRequest.json();
        setStatus("success");
      }
      catch {
        setStatus("error");
      }
    }
    else {
      setStatus("empty");
    }
  }

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
          <BasePrimaryButton onClick={onSendMessage}>SEND MESSAGE</BasePrimaryButton>
      </div>
    </div>
  )
}

export default ContactForm
