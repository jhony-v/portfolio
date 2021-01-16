import React, { forwardRef } from "react"
import { CSSProperties } from "react"
import { animated } from "react-spring"

type SubtitleProps = {
  children: React.ReactNode,
  style?: CSSProperties,
  className ?: string,
  onClick ?: () => void,
}

const Subtitle = forwardRef<HTMLSpanElement,SubtitleProps>(({
  children,
  style,
  className,
  onClick
},ref) =>  {
  return (
    <animated.span onClick={onClick} className={`font-bold flex text-green-400 ${className}`} style={style} ref={ref}>
      {children}
    </animated.span>
  )
});

export default Subtitle;