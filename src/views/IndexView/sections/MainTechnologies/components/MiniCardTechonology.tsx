import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"
import React, { useState } from "react"
import { useSpring } from "react-spring"
import { animated } from "react-spring/renderprops"
import styled from "styled-components"

const MiniCard = styled(animated.div)<PositionProps>`
  position: absolute;
  width: 110px;
  height: 140px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0.26);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  ${stylePosition};
`

const MiniCardTechonology = ({ text, image, left, top }) => {
  const [ hover, setHover ] = useState(false);
  const onEnter = () => {
    setHover(true);
  }
  const onLeave = () => {
    setHover(false);
  }

  return (
    <MiniCard
      left={left}
      top={top}
      className="flex items-center flex-col justify-center"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <img
        src={image}
        alt={image}
        className="w-12 h-12 mb-2 rounded-full bg-white"
      />
      <span className="text-sm text-center text-label">{text}</span>
    </MiniCard>
  )
}

export default MiniCardTechonology
