import React, { forwardRef } from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import tw from "twin.macro"

const StyledInput = styled(animated.input)`${tw`py-3 px-5 w-full block text-label rounded-md bg-dark-5`}`

type EditTextControlProps = {
  placeholder?: string
  className?: string
  as?: "input" | "textarea"
}
const EditTextControl = forwardRef<HTMLInputElement & HTMLTextAreaElement,EditTextControlProps>(
  ({ placeholder, className, as }, ref) => {
  return (
    <StyledInput
      placeholder={placeholder}
      className={className}
      ref={ref}
      as={as}
    />
  )
})

EditTextControl.defaultProps = {
  as: "input",
}

export default EditTextControl
