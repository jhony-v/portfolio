import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'

const links = [
  {
    name: 'Linkedin',
    icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/jhony-vega/',
  },
  {
    name: 'Twitter',
    icon: BsTwitter,
    url: 'https://twitter.com/JhonyV01',
  },
  {
    name: 'Dev.To',
    icon: FaDev,
    url: 'https://dev.to/jhony',
  },
]

const SocialLinks = () => {
  return (
    <div className="inline-flex gap-3">
      {links.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          aria-hidden="true"
          rel="noreferrer"
          className="text-xl"
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
