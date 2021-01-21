import React from "react"
import { useTransition } from "react-spring"
import FloatingSectionContent from 'layouts/FloatingSectionContent'

export default function WrapperSection({ children,visible }) {
  const props = useTransition(visible, null, {
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
              {children}
            </FloatingSectionContent>
          )
      )}
    </>
  )
}
