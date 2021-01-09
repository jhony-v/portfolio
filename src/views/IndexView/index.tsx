import React from 'react'
import AboutSection from './sections/AboutSection'
import BannerSection from './sections/BannerSection'

const IndexView = () => {
  return (
    <div className="index-view">
      <BannerSection/>
      <AboutSection/>
    </div>
  )
}

export default IndexView
