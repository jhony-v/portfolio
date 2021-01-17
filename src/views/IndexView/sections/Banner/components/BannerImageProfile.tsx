import React from 'react'
import styled from "styled-components"
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"

const ImageWrapper = styled.img<PositionProps>`
  transition: .3s linear;
  ${stylePosition};
`

const BannerImageWrapper = styled.div`
  position: relative;
  margin-left: -160px;
  transform-style: preserve-3d;
  transform: perspective(400px)rotateY(-10deg);
  @media screen and (max-width:980px){
    margin-left:0px;
    position:fixed;
    right:10%;
    bottom:10%;
  }
  @media screen and (max-width:768px) {
    position:static;
    margin:auto;
    margin-top:60px;
  }
  @media screen and (max-width:540px) {
    .banner__figure-solid {
      left:-20px;
      width:120px;
      height:150px;
      bottom:-20px;
    }
    .banner__figure-dotted > img {
      left:40px;
      top:2px;

    }
    .banner__image-profile {
      width:120px;
    }
  }
`

const SquareBackgroundImageWrapper = styled.div<PositionProps>`
  width: 180px;
  height: 260px;
  ${stylePosition};
`

const BannerImageProfile = () => {
    return (
        <BannerImageWrapper className="banner__image phone-100:mt-0 phone-100:mb-0">
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
                className="absolute banner__figure-solid bg-primary"
                left="-80px"
                bottom="-60px"
                />
            <ImageWrapper
                src="public_images/profile.png"
                width="220"
                height="270"
                className="relative object-cover banner__image-profile"
            />
        </BannerImageWrapper>    
    )
}

export default BannerImageProfile
