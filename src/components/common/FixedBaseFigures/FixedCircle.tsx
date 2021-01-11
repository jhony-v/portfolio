import styleBackgroundBase, { BackgroundBaseProps } from "common/StyledSystem/styleBackgroundBase";
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition";
import styled from "styled-components";

const FixedCircle = styled.div<{d ?: string} & PositionProps & BackgroundBaseProps>`
  width: ${props => props.d};
  height:${props => props.d};
  ${stylePosition};
  ${styleBackgroundBase};
  border-radius:100%;
  position:absolute;
  transition:transform .3s;
`
export default FixedCircle;