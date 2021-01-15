import React, { forwardRef } from "react"
import { CSSProperties } from "react"
import { animated } from "react-spring"

type SubtitleProps = {
  children: React.ReactNode,
  style?: CSSProperties,
  className ?: string
}

const Subtitle = forwardRef<HTMLSpanElement,SubtitleProps>(({
  children,
  style,
  className,
},ref) =>  {
  return (
    <animated.span className={`font-bold flex text-green-400 ${className}`} style={style} ref={ref}>
      {children}
    </animated.span>
  )
});

export default Subtitle;