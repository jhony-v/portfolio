import React, { ReactNode } from "react"
import styled from "styled-components";
import tw from "twin.macro"

const StyledButton = styled.button`
  padding:10px 35px;
  ${tw`text-secondary font-bold text-sm rounded-2xl border-secondary border-2 hover:scale-105 duration-150 transform`}
`

type BaseRoundedButtonProps = {
  children?: ReactNode
  onClick?: () => void
}

export default function BaseRoundedButton({ children, onClick }: BaseRoundedButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
