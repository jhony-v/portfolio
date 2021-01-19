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
    & .detail, & .image {
      height:100%;
    }
  }
`


const BannerSection = () => {
  useBannerScrollAnimation();
  useTextAnimatable();
  
  return (
    <BannerWrapper data-id="home" className="flex items-center md-100:flex-row flex-col-reverse">
      <LoadableComponent module={() => import("./CanvasBackdropAnimatable")} fallback={null} />
      <div className="detail phone-100:bg-black flex items-center md-100:w-4/5 phone-100:h-4/5 w-full" style={{height:"100%"}}>
        <BannerDescriptionProfile/>
      </div>
      <div className="image flex items-center relative bg-dark-10 md-100:w-1/5 w-full pb-12">
        <BannerImageProfile/>
      </div>
      {/* <LoadableComponent module={()=>import("./components/CirclesBubbleAnimation")} fallback={null} /> */}
    </BannerWrapper>
  )
}

export default BannerSection
