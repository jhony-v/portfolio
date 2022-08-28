import Navigator from '@/layouts/Navigator'
import AboutMeView from '@/views/AboutMeView'
import type { NextPage } from 'next'

const AboutMe: NextPage = () => {
  return (
    <Navigator>
      <AboutMeView />
    </Navigator>
  )
}

export default AboutMe
