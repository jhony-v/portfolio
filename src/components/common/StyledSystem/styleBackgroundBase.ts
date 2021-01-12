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
      background-color: rgba(30, 130, 230, ${props.opacity});
    `}
  ${props =>
    props.grayscale &&
    css`
      background-color: rgba(100, 100, 100, ${props.grayscale});
    `}
  ${props =>
    props.light &&
    css`
      background-color: rgba(255,255,255, ${props.light});
    `}
`

export default styleBackgroundBase
