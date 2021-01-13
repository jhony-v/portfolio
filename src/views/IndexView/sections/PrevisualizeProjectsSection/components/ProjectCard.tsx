import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import Subtitle from "common/Texts/Subtitle"
import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
  width: 100%;
  background-color: #242424;
  height: auto;
`

export default function ProjectCard({image}) {
  return (
    <Wrapper className="flex-col flex rounded-3xl overflow-hidden">
      <img
        className="w-full object-cover"
        style={{height:"200px"}}
        src={image}
      />
      <div className="p-4">
        <p className="text-label text-base mb-3 mt-3 font-bold">
          Facebook clone UI with ReactJS
        </p>
        <div className="mt-5 w-full">
          <p className="text-gray-300 text-sm mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam qui minus cupiditate nostrum sed itaque </p>
          <Subtitle>VIEW DETAIL</Subtitle>
        </div>
      </div>
    </Wrapper>
  )
}
