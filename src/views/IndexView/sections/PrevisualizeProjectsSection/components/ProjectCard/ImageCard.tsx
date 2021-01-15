import useVisibility from "hooks/useVisibility"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const WrapperImage = styled(animated.div)`
  width: 500px;
  flex: none;
  display: flex;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  & .image {
    border-radius: 15px;
    object-fit: cover;
    width: 90%;
    height: 100%;
    z-index: 1;
    background-color: #2e2e2e;
  }
  & .backdrop {
    position: absolute;
    width: 90%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--primary-color);
  }
`

export default function ImageCard({ src }) {
  const { ref, visible } = useVisibility()
  const transition = useSpring({
    transform: `translateY(${visible ? 0 : 200}px)`,
    opacity: Number(visible),
    config: {
      tension: 40,
    },
  })
  return (
    <animated.div style={transition}>
      <WrapperImage className="project__image" ref={ref}>
        <div className="backdrop"></div>
        {visible ? <img className="image" src={src} /> : <div className="image" />}
      </WrapperImage>
    </animated.div>
  )
}
