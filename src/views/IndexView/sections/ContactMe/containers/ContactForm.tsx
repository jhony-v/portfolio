import React from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import EditTextControl from "common/FormControls/Inputs/EditTextControl"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"

const ContactForm = () => {

  return (
    <div className="contact__form md:px-20 md:w-3/4">
      <TitleLayerInformation title="Contact me" />
      <div className="grid sm:grid-cols-2 gap-5 mt-12 mb-10">
        <EditTextControl placeholder="Name / Optional" className="col-span-2 sm:col-auto" />
        <EditTextControl placeholder="Email" className="col-span-2 sm:col-auto" />
        <EditTextControl placeholder="Subject" className="col-span-2" />
        <EditTextControl placeholder="Message" className="col-span-2 h-40" as="textarea" />
      </div>
      <div className="flex justify-end">
          <BasePrimaryButton>SEND MESSAGE</BasePrimaryButton>
      </div>
    </div>
  )
}

export default ContactForm
