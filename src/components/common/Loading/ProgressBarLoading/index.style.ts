import styled, { keyframes } from "styled-components"

export const animate = keyframes`
    from {
        width:0%;
    }
`

export interface ProgressProps {
    w?: string;
}

export const Progress = styled.div<ProgressProps>`
  width: ${props => props.w};
  height: 4px;
  border-radius:20px;
  overflow:hidden;
  background-color: rgba(100, 100, 100, 0.3);
`

export interface DurationProps {
    duration?: number;
}

export const Thumb = styled.div<DurationProps>`
  background-color: var(--primary-color);
  height: 100%;
  width:100%;
  animation: ${animate} ${props => props.duration}ms 1 linear;
`