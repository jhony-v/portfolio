import React from "react"
import LoadableComponent from "common/LoadableComponent"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"
import PulseCircleLoading from "common/Loading/PulseCircleLoading"

const animations = {
  enter: {
    clipPath: `circle(10000px at 40px 40px)`,
  },
  leave: {
    clipPath: `circle(0px at 40px 40px)`,
  },
}

const Wrapper = styled(animated.div)`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  z-index: 1000;
  display:flex;
  background: var(--primary-color);
`



export default function PrevisualizeProjectsSectionLoadable() {
    const { modalActive } = useModalVisualize()
    const transitions = useTransition(modalActive === "projects", null, {
        from: animations.leave,
        enter: animations.enter,
        leave: animations.leave,
        config : {
            duration : 1200,
        }
    })
    return <>
    {
      transitions.map(({ item, props }) =>
      item && (
        <Wrapper style={props}>
          <LoadableComponent module={() => import(".")} fallback={(
            <div className="fixed w-full h-full flex justify-center items-center">
              <PulseCircleLoading/>
            </div>
          )} />
        </Wrapper>
    ))}
    </>
}
