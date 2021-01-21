import React, { forwardRef } from "react"
import { animated, ReactSpringHook, useTransition } from "react-spring"

type FlexAnimatableProps = {
  items: boolean | boolean[]
  children: React.ReactNode
  animations: {
    enter: React.CSSProperties
    from: React.CSSProperties
    leave: React.CSSProperties
  },
  refAnimation : React.RefObject<ReactSpringHook>
}

const FlexAnimatable = forwardRef<HTMLDivElement, FlexAnimatableProps>(
  ({ animations, children, items,refAnimation }, ref) => {
    const transitions = useTransition(items, null, {
        from : animations.from,
        enter : animations.enter,
        leave : animations.leave,
        ref : refAnimation 
    })
    return (
        <>
        {transitions.map(({item,props},key) => (
           item && <animated.div style={props} ref={ref} key={key}>{children}</animated.div> 
        ))}
        </>
    )

  }
)

export default FlexAnimatable
