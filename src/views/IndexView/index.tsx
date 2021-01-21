import LoadableComponent from "common/LoadableComponent"
import React from "react"
import styled from "styled-components"
import AboutSection from "./sections/About/AboutSection"
import BannerSection from "./sections/Banner/BannerSection"

const WrapperSections = styled.div`
  display:flex;
  height:100%;
  overflow:hidden;
  scroll-behavior:smooth;
  & > * {
    flex:none;
    width:100%;
  }
`

const IndexView = () => {
  return (
    <div className="index-view flex h-full w-full overflow-auto bg-dark-10">
      <WrapperSections className="index-main__scrollable">
        <BannerSection />
        <AboutSection />
        <LoadableComponent module={()=>import("./sections/MainTechnologies")} fallback={null} />
      </WrapperSections>
      <LoadableComponent module={()=>import("./sections/PrevisualizeProjects")} fallback={null} />
      <LoadableComponent module={()=>import("./sections/ContactMe")} fallback={null} />
    </div>
  )
}

export default IndexView
