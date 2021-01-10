import React from "react"
import styled, { keyframes } from "styled-components"
import profile from "assets/profile.png"
import figure_dotted from "assets/figure_dotted.png"
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"
import useBannerScrollAnimation from "./hooks/useBannerScrollAnimation"

const bannerH1 = keyframes`
  from {
    opacity : 0;
    transform:translateY(-50px);
  }
`

const BannerWrapper = styled.div`
  width: 100%;
  height: 570px;
  padding-top: var(--height-navigator);
  background-color: #fcfcfc;
  display: flex;
  transition:.3s;
  align-items: center;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 90%);
  & > .left {
    background-color: #f1f4fa;
    width: 80%;
    height: 100%;
  }
  & > .right {
    background-color: #f8f8f8;
    width: 20%;
    height: 100%;
  }
  `

const H1 = styled.h1`
animation:${bannerH1} .3s 1 linear;
`

const TitleCareer = styled.h2`
  position: relative;
  text-shadow: 0 20px 30px rgba(100, 100, 100, 0.2);
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    background-color: #024e9b;
    width: 100px;
    bottom: -12px;
    left: 0;
  }
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
  background-color: #7440e2;
  width: 180px;
  height: 260px;
  ${stylePosition};
`

const BannerSection = () => {
  useBannerScrollAnimation();
  return (
    <BannerWrapper id="banner">
      <div className="left flex items-center justify-center">
        <div className="pl-20 relative duration-150 banner__text">
          <H1 className="text-black text-4xl font-bold duration-75">
            I'm Jhony Vega
          </H1>
          <TitleCareer className="mb-12 mt-2 text-blue-900 text-6xl font-bold flex">
            Frontend Developer
          </TitleCareer>
          <p className="text-gray-400 w-6/12 flex">
            Frontend Developer, working main in React , Vue and Testing libraries to improve the websites and create new features.
          </p>
        </div>
      </div>
      <div className="right flex items-center relative">
        <BannerImageWrapper>
          <div className="banner__figure-dotted transition duration-75">
          <ImageWrapper
            src={figure_dotted}
            width="160"
            className="absolute transform rotate-90"
            left="-75px"
            top="-10px"
          />
          </div>
          <SquareBackgroundImageWrapper
            className="z-10 absolute banner__figure-solid"
            left="-80px"
            bottom="-60px"
            />
          <ImageWrapper
            src={profile}
            width="220"
            height="270"
            className="z-10 relative object-cover banner__image-profile"
          />
        </BannerImageWrapper>
      </div>
    </BannerWrapper>
  )
}

export default BannerSection