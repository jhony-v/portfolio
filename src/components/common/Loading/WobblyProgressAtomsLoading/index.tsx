import React from "react"
import CurveAtomsLoading from "common/Loading/CurveAtomsLoading"
import ProgressBarLoading from "common/Loading/ProgressBarLoading"
import { animated, config, useSpring, useTransition } from "react-spring"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
  background: rgba(20,20,20);
  z-index: 10000;
`

type WobblyProgressAtomsLoadingProps = {
  text?: string
  duration?: number
  visible?: boolean
}

export default function WobblyProgressAtomsLoading({
  visible,
  text,
  duration,
}: WobblyProgressAtomsLoadingProps) {
  const props = useTransition(visible, null, {
    from: {
      transform: "translate(0%,-100%)",
    },
    enter: {
      transform: "translate(0%,0%)",
    },
    leave: {
      transform: "translate(0%,100%)",
    },
  })

  return (
    <>
      {props.map(
        ({ item, props, key }) =>
          item && (
            <Wrapper
              className="fixed h-full flex-col flex w-full left-0 justify-center items-center"
              style={props}
              key={key}
            >
              <CurveAtomsLoading text={text} />
              <div className="fixed bottom-20 flex justify-center w-full">
                <ProgressBarLoading duration={duration} w="400px" />
              </div>
            </Wrapper>
          )
      )}
    </>
  )
}
