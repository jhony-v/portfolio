import styled from 'styled-components'
import { default as NextImage } from 'next/image'

const Image = styled(NextImage)`
  border-radius: 100%;
  object-fit: cover;
  background: var(--primary-color-light);
  &:not(:first-child) {
    margin-left: -10px;
  }
`
const images = [
  {
    name: 'React',
    url: '/stack/react.png',
  },
  {
    name: 'Typescript',
    url: '/stack/typescript.svg',
  },
  {
    name: 'AWS',
    url: '/stack/aws.jpg',
  },
]

const TechnologiesChain = () => {
  return (
    <div className="inline-flex relative">
      {images.map(({ url, name }) => (
        <Image
          key={name}
          src={url}
          alt={url}
          width={40}
          height={40}
          placeholder="empty"
        />
      ))}
    </div>
  )
}

export default TechnologiesChain
