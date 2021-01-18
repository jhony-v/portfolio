import React from "react"
import { useTransition, animated } from "react-spring"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
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

export default function WrapperSection({ children,visible }) {
  const props = useTransition(visible, null, {
    from: {
      transform: "translate(0%,-100%)",
      opacity : 0,
    },
    enter: {
      transform: "translate(0%,0%)",
      opacity : 1,
    },
    leave: {
      transform: "translate(0%,100%)",
      opacity : 1,
    },
  })
  return (
    <>
      {props.map(
        ({ item, key, props }) =>
          item && (
            <Wrapper style={props} key={key}>
              {children}
            </Wrapper>
          )
      )}
    </>
  )
}
