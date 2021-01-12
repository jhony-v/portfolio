import React from "react"
import styled, { keyframes } from "styled-components"

const s = 100
const pulse = keyframes`
      from {
        transform:scale(0);
      }
`

interface LoadingProps {
  scale: number
  opacity: number
  duration: number
  bg: "primary" | "nature"
}
const Loading = styled.div<LoadingProps>`
  position: relative;
  width: ${s}px;
  height: ${s}px;
  transform: scale(${props => props.scale});
  background: ${props =>
    props.bg === "primary" ? "va(--primary-color)" : "white"};
  opacity: ${props => props.opacity};
  border-radius: 100%;
  animation: ${pulse} ${props => props.duration}s infinite linear;
`

const WrapperLoading = styled.div`
  margin: auto;
  position: relative;
  ${Loading} {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: 0;
  }
`

export default function PulseCircleLoading({bg,}: { bg: "primary" | "nature" }) {
  return (
    <WrapperLoading>
      <Loading bg={bg} opacity={.2} duration={1} scale={.6} />
      <Loading bg={bg} opacity={.4} duration={1.8} scale={2} />
      <Loading bg={bg} opacity={.2} duration={2} scale={5} />
      <Loading bg={bg} opacity={.1} duration={4} scale={8} />
      <Loading bg={bg} opacity={.1} duration={2} scale={12} />
    </WrapperLoading>
  )
}

PulseCircleLoading.defaultProps = {
    bg : "nature"
}