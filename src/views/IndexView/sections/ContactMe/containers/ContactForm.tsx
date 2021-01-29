import React, { useEffect, useRef, useState } from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import EditTextControl from "common/FormControls/Inputs/EditTextControl"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"
import FloatingAlertMessage from "../components/FloatingAlertMessage";
import CircleLoading from "../components/CircleLoading";
import useSendMail from "hooks/useSendMail";

const ContactForm = () => {
  const { loading, isStatus, onSendMessage,props } = useSendMail();
  const { name, email, subject, message } = props;

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
