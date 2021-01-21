import useVisibility from "hooks/useVisibility"
import React, { memo } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const WrapperImage = styled(animated.div)`
  width: 500px;
  flex: none;
  display: flex;
  position: relative;
  transform-style: preserve-3d;
  & .image {
    border-radius: 15px;
    object-fit: cover;
    height: 100%;
    z-index: 1;
    background-color: #2e2e2e;
  }
  & .backdrop {
    position: absolute;
    height: 100%;
    border-radius: 10px;
    background-color: var(--primary-color);
  }

  @media screen and (max-width:1125px) {
    width:33vw;
  }

  @media screen and (max-width:768px){
    width:100%;
    margin-top:20px;
  }
`

function ImageCard({ src }) {
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
      <WrapperImage className="project__image h-40 sm:h-80" ref={ref}>
        <div className="backdrop "></div>
        {visible ? <img className="image w-11/12 m-auto sm:w-11/12" src={src} /> : <div className="image w-full sm:w-11/12" />}
      </WrapperImage>
    </animated.div>
  )
}

export default memo(ImageCard);