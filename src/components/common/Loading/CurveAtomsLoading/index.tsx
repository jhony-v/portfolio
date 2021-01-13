import React from "react"
import styled, { keyframes } from "styled-components"

const loading = keyframes`
  from {
    transform:translateY(-50px)scale(.7);
  }

`

interface LoaderProps {
    bg : string;
    delay: number;
}
const Loader = styled.div<LoaderProps>`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: ${props => props.bg};
  animation: ${loading} 0.5s infinite linear alternate;
  animation-delay: ${props => props.delay}s;
  transform-origin: top;
`

const TextLoader = styled.span`
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: -70px;
  white-space:nowrap;
  text-align:center;
`

const LoaderWrapper = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
  ${Loader} {
    margin: 0 7px;
  }
`

export default function CurveAtomsLoading({ text }: { text?: string }) {
  return (
    <LoaderWrapper>
      <Loader delay={0.1} bg="orange" />
      <Loader delay={0.3} bg="aqua" />
      <Loader delay={0.4} bg="#7440e2" />
      <Loader delay={0.6} bg="rgba(230,60,90)" />
      {text && <TextLoader>{text}</TextLoader>}
    </LoaderWrapper>
  )
}
