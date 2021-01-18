import React from "react"
import CurveAtomsLoading from "common/Loading/CurveAtomsLoading"
import ProgressBarLoading from "common/Loading/ProgressBarLoading"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled(animated.div)`
  background: rgba(20,20,20);
  z-index: 10000;
  .progress-bar-wrapper { 
    ${tw`fixed bottom-20 flex justify-center w-full`}
  }
  .progress-bar {
    width:400px;
    @media screen and (max-width:540px) {
      width:80%;
    }
  }
  ${tw`fixed h-full flex-col flex w-full left-0 justify-center items-center`}
`

const transitionAnimations = {
  from: {
    transform: "translate(0%,-100%)",
  },
  enter: {
    transform: "translate(0%,0%)",
  },
  leave: {
    transform: "translate(0%,100%)",
  },
}

type WobblyProgressAtomsLoadingProps = {
  text?: string
  duration?: number
  visible?: boolean
}

export default function WobblyProgressAtomsLoading({ visible, text, duration }: WobblyProgressAtomsLoadingProps) {
  const transitions = useTransition(visible, null,transitionAnimations);


  return (
    <>
      {transitions.map(({ item, props, key }) => item && (
            <Wrapper style={props} key={key}>
              <CurveAtomsLoading text={text} />
              <div className="progress-bar-wrapper">
                <ProgressBarLoading duration={duration} className="progress-bar" />
              </div>
            </Wrapper>
          )
      )}
    </>
  )
}
