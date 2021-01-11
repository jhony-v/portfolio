import React from 'react'
import { ReactNode } from 'react';
import styled from "styled-components";

const Wrapper = styled.button`
  border:2px solid #211f25;
  padding:8px 30px;
`

type BaseRoundedButtonProps = {
    children ?: ReactNode;
    onClick ?: () => void
}

export default function BaseRoundedButton({children,onClick}:BaseRoundedButtonProps) {
    return (
        <Wrapper onClick={onClick} className="font-bold text-sm rounded-2xl">
            {children}
        </Wrapper>
    )
}
