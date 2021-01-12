import React from 'react'
import { ReactNode } from 'react';
import styled from "styled-components";

const Wrapper = styled.button`
  padding:10px 35px;
`

type BaseRoundedButtonProps = {
    children ?: ReactNode;
    onClick ?: () => void
}

export default function BaseRoundedButton({children,onClick}:BaseRoundedButtonProps) {
    return (
        <Wrapper onClick={onClick} className="font-bold text-sm rounded-2xl text-secondary border-secondary border-2">
            {children}
        </Wrapper>
    )
}
