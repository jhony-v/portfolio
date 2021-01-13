import React, { useRef } from "react"
import FixedCircle from "common/FixedBaseFigures/FixedCircle"
import styled, { keyframes } from "styled-components"
import useWindowMouseMove from "hooks/useWindowMouseMove"

const movementKeyframes = scale => keyframes`
  from { transform:scale(${scale}); }
`
const FixedCircleAnimatable = styled(FixedCircle)`
  transition: 0.3s;
  animation: ${props => movementKeyframes(props.grayscale)}
    ${props => props.grayscale * 50}s infinite linear alternate;
`

export default function CirclesBubbleAnimation() {
  const bubbleContainer = useRef(null)
  useWindowMouseMove(e => {
    if (bubbleContainer.current) {
      let x = e.clientX - 80
      let y = e.clientY
      let bubbles = bubbleContainer.current as HTMLElement
      let elements = bubbles.querySelectorAll("div")
      elements.forEach(item => {
        let bubble = item as HTMLElement
        let bubbleDimensions =  bubble.getBoundingClientRect();
      })
    }
  })

  return (
    <div ref={bubbleContainer}>
      <FixedCircleAnimatable left="17%" top="50%" grayscale={0.1} d="250px" />
      <FixedCircleAnimatable right="35%" top="10%" grayscale={0.15} d="300px" />
      <FixedCircleAnimatable right="5%" top="15%" grayscale={0.2} d="100px" />
      <FixedCircleAnimatable right="5%" top="8%" grayscale={0.16} d="30px" />
      <FixedCircleAnimatable left="10%" bottom="8%" grayscale={0.2} d="90px" />
      <FixedCircleAnimatable right="5%" bottom="8%" grayscale={0.15} d="120px" />
      <FixedCircleAnimatable left="15%" top="5%" grayscale={.1} d="120px" />
    </div>
  )
}
