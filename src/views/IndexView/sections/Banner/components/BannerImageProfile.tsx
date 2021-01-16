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
`

const SquareBackgroundImageWrapper = styled.div<PositionProps>`
  width: 180px;
  height: 260px;
  ${stylePosition};
`

const BannerImageProfile = () => {
    return (
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
    )
}

export default BannerImageProfile
