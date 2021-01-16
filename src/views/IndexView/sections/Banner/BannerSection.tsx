import React from "react"
import styled from "styled-components"
import useBannerScrollAnimation from "./hooks/useBannerScrollAnimation"
import SectionFullHeight from "layouts/SectionFullHeight"
import LoadableComponent from "common/LoadableComponent"
import useTextAnimatable from "./hooks/useTextAnimatable"
import BannerImageProfile from "./components/BannerImageProfile"
import BannerDescriptionProfile from "./components/BannerDescriptionProfile"

const BannerWrapper = styled(SectionFullHeight)`
  transition:.3s;
  @media screen and (min-width:768px) {
    clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 90%);
  }
`


const BannerSection = () => {
  useBannerScrollAnimation();
  useTextAnimatable();
  
  return (
    <BannerWrapper data-id="home" className="flex items-center md-100:flex-row flex-col-reverse">
      <div className="phone-100:bg-black flex items-center md-100:w-4/5 md-100:h-full phone-100:h-4/5 w-full">
        <BannerDescriptionProfile/>
      </div>
      <div className="flex items-center relative bg-dark-10 md-100:w-1/5 md-100:h-full w-full pb-12">
        <BannerImageProfile/>
      </div>
      <LoadableComponent module={()=>import("./components/CirclesBubbleAnimation")} fallback={null} />
    </BannerWrapper>
  )
}

export default BannerSection
