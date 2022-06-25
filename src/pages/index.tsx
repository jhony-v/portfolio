import Navigator from '@/layouts/Navigator'
import HomePage from '@/views/HomePage'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Navigator>
      <HomePage />
    </Navigator>
  )
}

export default Home
