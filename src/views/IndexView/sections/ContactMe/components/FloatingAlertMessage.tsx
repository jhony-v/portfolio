import React from "react"
import { animated, config, useTransition } from "react-spring"
import styled from "styled-components"
import tw from "twin.macro"

const Title = styled.div`${tw`text-label font-bold text-2xl mb-5`}`
const Message = styled.div`${tw`text-label font-bold text-sm`}`

const Wrapper = styled(animated.div)<{variant:"success" | "error" | "warning"}>`
  ${tw`fixed right-0 bottom-0 mr-10 md:mb-10 mb-24 rounded-md p-5 w-64 md:w-80`}
  ${props => props.variant === "success" && tw`bg-blue-500`}
  ${props => props.variant === "error" && tw`bg-red-500`}
  ${props => props.variant === "warning" && tw`bg-yellow-500`} 
  box-shadow:0 15px 30px black;
`

type FloatingAlertMessageProps = {
  visible ?: boolean  
  title: string
  message: string
  variant: "success" | "error" | "warning"
}
function FloatingAlertMessage({message,title,variant,visible}:FloatingAlertMessageProps) {
  const transitions = useTransition(visible,null,{
      from : {
        opacity : 0,
        transform : 'translateX(100%)',
      },
      enter : {
        opacity : 1,
        transform : 'translateX(0%)',
      },
      leave : {
        opacity : 0,
        transform : 'translateX(100%)',
      },
      config : config.wobbly
  });
  return <>
    {transitions.map(({item,props},index) => (
      item && (
        <Wrapper variant={variant} style={props} key={index}>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Wrapper>
      )
    ))}
  </>;
}

export default FloatingAlertMessage
