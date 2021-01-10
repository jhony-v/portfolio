import React from "react"
import { Transition } from "react-spring/renderprops"

const TextTranslateYAnimation = ({ text, trail }) => {
  const value = text.split("").map((value, key) => ({ value, key }))
  return (
    <Transition
      items={value}
      keys={e => e.key}
      config={{
        tension: 500,
        friction: 10,
      }}
      from={{ transform: "translateY(-50px)", opacity: 0 }}
      enter={{ transform: "translateY(0px)", opacity: 1 }}
      leave={{ transform: "translateY(40px)", opacity: 0 }}
      trail={trail}
    >
      {item => props => (
        <div style={props} className={`${item.value === " " ? "w-4" : ""}`}>
          {item.value}
        </div>
      )}
    </Transition>
  )
}

export default TextTranslateYAnimation
