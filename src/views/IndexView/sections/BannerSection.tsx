import React from "react"
import styled, { css } from "styled-components"
import profile from "assets/profile.png"
import figure_dotted from "assets/figure_dotted.png"
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"

const BannerWrapper = styled.div`
  width: 100%;
  height: 570px;
  padding-top: var(--height-navigator);
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 90%);
  & > .left {
    background-color: #e9eef9;
    width: 80%;
    height: 100%;
  }
  & > .right {
    background-color: #f8f8f8;
    width: 20%;
    height: 100%;
  }
`

const TitleCareer = styled.div`
  position: relative;
  text-shadow:0 20px 30px rgba(100,100,100,.2);
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
    ${stylePosition};
`

const BannerImageWrapper = styled.div`
    position:relative;
    margin-left:-160px;
    transform-style:preserve-3d;
    transform:perspective(400px)rotateY(-10deg);
`

const SquareBackgroundImageWrapper = styled.div<PositionProps>`
    background-color:#7440E2;
    width:180px;
    height:260px;
    ${stylePosition};
`


const BannerSection = () => {
  return (
    <BannerWrapper>
      <div className="left flex items-center justify-center">
        <div className="pl-20">
          <h1 className="text-black text-4xl font-bold ">I'm Jhony Vega</h1>
          <TitleCareer className="mb-12 mt-2 text-blue-900 text-6xl font-bold ">
            Frontend Developer
          </TitleCareer>
          <p className="text-gray-400 w-6/12">
            Frontend Developer, working main in React , Vue and Testing
            libraries to improve the websites and create new features.
          </p>
        </div>
      </div>
      <div className="right flex items-center relative">
        <BannerImageWrapper>
          <ImageWrapper src={figure_dotted} width="160" className="absolute transform rotate-90" left="-75px" top="-10px" />
          <SquareBackgroundImageWrapper className="z-10 absolute"  left="-80px" bottom="-60px" />
          <ImageWrapper src={profile} width="220" height="270" className="z-10 relative object-cover" />
        </BannerImageWrapper>
      </div>
    </BannerWrapper>
  )
}

export default BannerSection
