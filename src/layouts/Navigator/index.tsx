import NavigatorItem from '@/components/NavigatorItem'
import React, { FC } from 'react'
import Home from '@material-ui/icons/Home'
import Person from '@material-ui/icons/Person'
import CodeSharp from '@material-ui/icons/CodeSharp'
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined'
import Send from '@material-ui/icons/Send'
import TagAboutMe from '@/components/TagAboutMe'

const Navigator: FC = ({ children }) => {
  return (
    <div className="flex sm:min-h-screen">
      <div className="border-t border-gray-900 sm:border-r flex sm:flex-col fixed sm:static bottom-0  sm:w-sidebar w-full">
        <TagAboutMe />
        <ul className="my-auto flex sm:block justify-around w-full">
          <li>
            <NavigatorItem
              to="/"
              text="home"
              icon={<Home fontSize="small" />}
            />
          </li>
          <li>
            <NavigatorItem
              to="/about-me"
              text="about me"
              icon={<Person fontSize="small" />}
            />
          </li>
          <li>
            <NavigatorItem
              to="/skills"
              text="skills"
              icon={<CodeSharp fontSize="small" />}
            />
          </li>
          <li>
            <NavigatorItem
              to="/projects"
              text="projects"
              icon={<AddBoxOutlined fontSize="small" />}
            />
          </li>
          <li>
            {' '}
            <NavigatorItem
              to="/contact-me"
              text="contact me"
              icon={<Send fontSize="small" />}
            />
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Navigator
