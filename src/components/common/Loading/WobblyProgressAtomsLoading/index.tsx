import React from "react"
import CurveAtomsLoading from "common/Loading/CurveAtomsLoading"
import ProgressBarLoading from "common/Loading/ProgressBarLoading"
import { animated, config, useSpring } from "react-spring"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
  background: rgba(0, 0, 0, 0.95);
  z-index:1000;
`

type WobblyProgressAtomsLoadingProps = {
  text ?: string;
  duration ?: number;
}

export default function WobblyProgressAtomsLoading({text,duration}:WobblyProgressAtomsLoadingProps) {
  const props = useSpring({
    from: {
      transform: "translateY(-100%)",
    },
    transform: "translateY(0%)",
    config : config.wobbly
  })

  return (
    <Wrapper
      className="fixed h-full flex-col flex w-full left-0 justify-center items-center"
      style={props}
    >
      <CurveAtomsLoading text={text} />
      <div className="fixed bottom-20 flex justify-center w-full">
        <ProgressBarLoading duration={duration} w="400px" />
      </div>
    </Wrapper>
  )
}
