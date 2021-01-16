import React from "react"
import styled, { keyframes } from "styled-components"
import TitleCareer from "./TitleCareer"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"

const bannerH1 = keyframes`
  from {
    opacity : 0;
    transform:translateY(-50px);
  }
`

const H1 = styled.h1`
  animation:${bannerH1} .3s 1 linear;
`

const BannerDescriptionProfile = () => {
  return (
    <div className="pl-20 relative duration-150 banner__text cursor-default">
      <H1 className="text-label text-5xl font-bold duration-75">
        I'm Jhony Vega
      </H1>
      <TitleCareer />
      <p className="text-gray-200 w-4/6 flex">
        Hi 👋, I'm a frontend developer, passionate about programming and web
        development ❤️.
      </p>
      <div className="mt-9">
        <BaseRoundedButton>Contact me</BaseRoundedButton>
      </div>
    </div>
  )
}

export default BannerDescriptionProfile
