import React from "react"
import styled from "styled-components"

const Title = styled.div`

`
const Message = styled.div`

`

const Wrapper = styled.div<{variant:"success" | "error" | "warning"}>`

`

type FloatingAlertMessageProps = {
  visible ?: boolean  
  title: string
  message: string
  variant: "success" | "error" | "warning"
}
function FloatingAlertMessage({message,title,variant,visible}:FloatingAlertMessageProps) {
  return !visible ? null : (
      <Wrapper variant={variant}>
          <Title>{title}</Title>
          <Message>{message}</Message>
      </Wrapper>
  )
}

export default FloatingAlertMessage
