import NavigatorItem from '@/components/NavigatorItem'
import { FC } from 'react'
import TagAboutMe from '@/components/TagAboutMe'
import SEO from '@/components/SEO'
import dynamic from 'next/dynamic'
import { BsGithub } from 'react-icons/bs'

const AsyncBackgroundAnimation = dynamic(
  () => import('@/components/BackgroundAnimation'),
  { ssr: false }
)

const Navigator: FC = ({ children }) => {
  return (
    <SEO>
      <header className="flex items-center justify-between px-5 md:px-11 py-4 sticky top-0">
        <TagAboutMe />
        <ul className="inline-flex items-center gap-9 mx-auto left-0 right-0">
          <li>
            <NavigatorItem to="/" text="home" />
          </li>
          <li>
            <NavigatorItem to="/about-me" text="about me" />
          </li>
          <li>
            <NavigatorItem to="/skills" text="skills" />
          </li>
          <li>
            <NavigatorItem to="/projects" text="projects" />
          </li>
        </ul>
        <a href="https://github.com/jhony-v" className="text-white text-2xl">
          <BsGithub />
        </a>
      </header>
      <main
        data-id="main-navigator"
        className="p-2 md:px-11 lg:p-16 sm:h-screen flex-1"
      >
        <AsyncBackgroundAnimation />
        {children}
      </main>
    </SEO>
  )
}

export default Navigator
