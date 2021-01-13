import { css } from "styled-components"

export interface BackgroundBaseProps {
  opacity?: number
  grayscale?: number
  light ?: number;
}
const styleBackgroundBase = css<BackgroundBaseProps>`
  ${props =>
    !props.grayscale &&
    css`
      background-color:var(--primary-color);
      opacity:${props.opacity};
    `}
  ${props =>
    props.grayscale &&
    css`
      background-color: rgba(150, 150, 150, ${props.grayscale});
    `}
  ${props =>
    props.light &&
    css`
      background-color: rgba(255,255,255, ${props.light});
    `}
`

export default styleBackgroundBase
