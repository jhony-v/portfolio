import { animated } from "react-spring";
import styled from "styled-components";

export default styled(animated.div)`
  width: calc(100% - var(--width-navigator));
  right: 0;
  height: 100%;
  z-index: 1;
  display: flex;
  position: fixed;
  background: rgb(15, 15, 15);
  @media screen and (min-width:540px) {
    .content__projects,
    .preview__projects {
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(100, 100, 100, 0.6);
      }
    }
  }
  @media screen and (max-width:768px) {
    width:100%;
  }
`
