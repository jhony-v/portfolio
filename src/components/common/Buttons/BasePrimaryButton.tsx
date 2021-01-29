import React from 'react'
import styled from "styled-components";
import tw from 'twin.macro';

const StyledButton = styled.button`
    ${tw`rounded-3xl pt-3 pb-3 pl-7 pr-7 text-white bg-purple-700 font-bold text-sm hover:scale-105 duration-150 transform flex items-center`}
`

type BasePrimaryButtonProps = {
    children ?: React.ReactNode;
    onClick ?: () => void;
}
export default function BasePrimaryButton({children,onClick}:BasePrimaryButtonProps) {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}
