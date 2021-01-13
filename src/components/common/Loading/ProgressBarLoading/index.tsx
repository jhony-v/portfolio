import React from "react"
import styled, { keyframes } from "styled-components"

const animate = keyframes`
    from {
        width:0%;
    }
`

interface WrapperProps {
    w?: string;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${props => props.w};
  height: 4px;
  border-radius:20px;
  overflow:hidden;
  background-color: rgba(100, 100, 100, 0.3);
`

interface DurationProps {
    duration?: number;
}

const Thumb = styled.div<DurationProps>`
  background-color: var(--primary-color);
  height: 100%;
  width:100%;
  animation: ${animate} ${props => props.duration}ms 1 linear;
`

interface ProgressBarLoadingProps extends DurationProps,WrapperProps{}

export default function ProgressBarLoading({duration,w}:ProgressBarLoadingProps) {
  return (
    <Wrapper w={w}>
      <Thumb duration={duration} />
    </Wrapper>
  )
}
