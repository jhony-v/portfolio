import styleBackgroundBase,  {BackgroundBaseProps} from "common/StyledSystem/styleBackgroundBase";
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition";
import styled from "styled-components";

interface FixedBoxProps {
    w ?: string;
    h ?: string;
}
const FixedBox = styled.div<PositionProps & FixedBoxProps & BackgroundBaseProps>`
    ${stylePosition};
    ${styleBackgroundBase};
    position:absolute;
    transition:transform .3s;
    width: ${props => props.w};
    height:${props => props.h};
`

export default FixedBox;