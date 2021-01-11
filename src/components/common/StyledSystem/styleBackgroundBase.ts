import { css } from "styled-components"

export interface BackgroundBaseProps {
  opacity?: number
  grayscale?: number
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
`

export default styleBackgroundBase
