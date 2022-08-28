import NavigatorItem from '@/components/NavigatorItem'
import { FC } from 'react'
import Home from '@material-ui/icons/Home'
import Person from '@material-ui/icons/Person'
import CodeSharp from '@material-ui/icons/CodeSharp'
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined'
import TagAboutMe from '@/components/TagAboutMe'
import SEO from '@/components/SEO'

const Navigator: FC = ({ children }) => {
  return (
    <SEO>
      <div className="flex sm:min-h-screen">
        <div className="border-t p-2 sm:p-0 border-gray-900 sm:border-r z-20 flex sm:flex-col fixed sm:static bottom-0  sm:w-sidebar w-full bg-dark-100 bg-opacity-50">
          <TagAboutMe />
          <ul className="my-auto flex sm:block justify-around w-full">
            <li>
              <NavigatorItem
                to="/"
                text="home"
                icon={<Home fontSize="medium" />}
              />
            </li>
            <li>
              <NavigatorItem
                to="/about-me"
                text="about me"
                icon={<Person fontSize="medium" />}
              />
            </li>
            <li>
              <NavigatorItem
                to="/skills"
                text="skills"
                icon={<CodeSharp fontSize="medium" />}
              />
            </li>
            <li>
              <NavigatorItem
                to="/projects"
                text="projects"
                icon={<AddBoxOutlined fontSize="medium" />}
              />
            </li>
          </ul>
        </div>
        <main className="p-5 md:px-11 lg:p-24 overflow-y-auto sm:h-screen flex-1">
          {children}
        </main>
      </div>
    </SEO>
  )
}

export default Navigator
