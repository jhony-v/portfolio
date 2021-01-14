import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import Subtitle from "common/Texts/Subtitle"
import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
  width: 100%;
  background-color: #1b1b1b;
  height: auto;
  transition:.3s;
  &:hover {
    background-color:#272727;
    cursor:pointer;
  }
`

export default function ProjectCard({image,style}) {
  return (
    <Wrapper className="flex-col flex rounded-3xl overflow-hidden" style={style}>
      <img
        className="w-full object-cover"
        style={{height:"150px"}}
        src={image}
      />
      <div className="p-4">
        <p className="text-label text-base mb-3 mt-3 font-bold">
          Facebook clone UI with ReactJS
        </p>
      </div>
    </Wrapper>
  )
}
