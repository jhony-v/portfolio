import React from "react"
import GitHubLinkToRepository from "./components/GitHubLinkToRepository"
import AboutSection from './sections/About/AboutSection'
import BannerSection from "./sections/Banner/BannerSection"
import MainTechnologiesSection from "./sections/MainTechnologies/MainTechnologiesSection"

const IndexView = () => {
  return (
    <div className="index-view">
      <GitHubLinkToRepository />
      <BannerSection />
      <AboutSection/>
      <MainTechnologiesSection />
    </div>
  )
}

export default IndexView
