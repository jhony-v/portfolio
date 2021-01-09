import { css } from "styled-components"

export type PositionProps = {
    left ?: string;
    right?: string;
    top ?: string;
    bottom ?: string;
}

const stylePosition = css<PositionProps>`
    left :${props => props.left};
    right :${props => props.right};
    top :${props => props. top};
    bottom :${props => props.bottom};
`

export default stylePosition;