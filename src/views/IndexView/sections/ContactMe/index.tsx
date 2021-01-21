import FloatingSectionContent from 'layouts/FloatingSectionContent'
import React from 'react'
import { useTransition } from "react-spring"
import { useModalVisualize } from 'views/IndexView/contexts/ModalVisualize/ModalVisualizeContext'
import ContactBanner from './containers/ContactBanner'
import ContactForm from './containers/ContactForm'


const ContactMe = () => {
    const { isEqual } = useModalVisualize();
    const props = useTransition(isEqual("contact"), null, {
        from: {
          opacity : 0,
        },
        enter: {
          opacity : 1,
        },
        leave: {
          opacity : 1,
        },
      })
    return (
        <>
      {props.map(
        ({ item, key, props }) =>
          item && (
            <FloatingSectionContent style={props} key={key}>
                <div className="flex md:flex-row flex-col w-full pt-5 md:pt:20 pb-20 px-4 sm:px-20 md:px-0 overflow-y-auto">
                <ContactForm/>
                <ContactBanner/>
                </div>
            </FloatingSectionContent>
          )
      )}
    </>
    )
}

export default ContactMe
