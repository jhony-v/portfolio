import React from "react"
import styled, { keyframes } from "styled-components"
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"
import useBannerScrollAnimation from "./hooks/useBannerScrollAnimation"
import SectionFullHeight from "layouts/SectionFullHeight"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import LoadableComponent from "common/LoadableComponent"
import useTextAnimatable from "./hooks/useTextAnimatable"
import TitleCareer from "./components/TitleCareer"

const bannerH1 = keyframes`
  from {
    opacity : 0;
    transform:translateY(-50px);
  }
`

const BannerWrapper = styled(SectionFullHeight)`
  display: flex;
  transition:.3s;
  align-items: center;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 90%);
  & > .left {
    width: 80%;
  }
  & > .right {
    width: 20%;
  }
  `

const H1 = styled.h1`
animation:${bannerH1} .3s 1 linear;
`

const ImageWrapper = styled.img<PositionProps>`
  transition: .3s linear;
  ${stylePosition};
`

const BannerImageWrapper = styled.div`
  position: relative;
  margin-left: -160px;
  transform-style: preserve-3d;
  transform: perspective(400px)rotateY(-10deg);
`

const SquareBackgroundImageWrapper = styled.div<PositionProps>`
  width: 180px;
  height: 260px;
  ${stylePosition};
`

const BannerSection = () => {
  useBannerScrollAnimation();
  useTextAnimatable();
  return (
    <BannerWrapper data-id="home">
      <div className="left h-full bg-black flex items-center">
        <div className="pl-20 relative duration-150 banner__text cursor-default">
          <H1 className="text-label text-5xl font-bold duration-75">
            I'm Jhony Vega
          </H1>
          <TitleCareer/>
          <p className="text-gray-200 w-4/6 flex"> 
          Hi 👋, I'm a frontend developer, passionate about programming and web development ❤️.
          </p>
          <div className="mt-9">
            <BaseRoundedButton>Contact me</BaseRoundedButton>
          </div>
        </div>
      </div>
      <div className="right h-full flex items-center relative bg-dark-10">
        <BannerImageWrapper className="banner__image z-10">
          <div className="banner__figure-dotted transition duration-75">
          <ImageWrapper
            src="public_images/figure_dotted.png"
            width="160"
            className="absolute transform rotate-90"
            left="-75px"
            top="-10px"
          />
          </div>
          <SquareBackgroundImageWrapper
            className="z-10 absolute banner__figure-solid bg-primary"
            left="-80px"
            bottom="-60px"
            />
          <ImageWrapper
            src="public_images/profile.png"
            width="220"
            height="270"
            className="z-10 relative object-cover banner__image-profile"
          />
        </BannerImageWrapper>
      </div>
      <LoadableComponent module={()=>import("./components/CirclesBubbleAnimation")} fallback={null} />
    </BannerWrapper>
  )
}

export default BannerSection
