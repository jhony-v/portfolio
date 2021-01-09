import React from 'react'
import GitHubLinkToRepository from './components/GitHubLinkToRepository'
import AboutSection from './sections/AboutSection'
import BannerSection from './sections/BannerSection'
import MainTechnologiesSection from './sections/MainTechnologiesSection'

const IndexView = () => {
  return (
    <div className="index-view">
      <GitHubLinkToRepository/>
      <BannerSection/>
      <AboutSection/>
      <MainTechnologiesSection/>
    </div>
  )
}

export default IndexView
