import React from "react"
import GitHubLinkToRepository from "./components/GitHubLinkToRepository"
import AboutSection from "./sections/About/AboutSection"
import BannerSection from "./sections/Banner/BannerSection"
import MainTechnologiesSection from "./sections/MainTechnologies/MainTechnologiesSection"
import PrevisualizeProjectsSectionLoadable from "./sections/PrevisualizeProjectsSection/PrevisualizeProjectsSectionLoadable"

const IndexView = () => {
  return (
    <div className="index-view">
      <GitHubLinkToRepository />
      <BannerSection />
      <AboutSection />
      <MainTechnologiesSection />
      <PrevisualizeProjectsSectionLoadable/>
    </div>
  )
}

export default IndexView
