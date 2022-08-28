import Navigator from '@/layouts/Navigator'
import HomePageView from '@/views/HomePageView'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Navigator>
      <HomePageView />
    </Navigator>
  )
}

export default Home
