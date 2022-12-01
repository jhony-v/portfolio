import styled from 'styled-components'

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  background: var(--primary-color-lighter);
  &:not(:first-child) {
    margin-left: -10px;
  }
`
const images = [
  {
    name: 'React',
    url: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
  },
  {
    name: 'Typescript',
    url: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
  },
  {
    name: 'AWS',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasNCg-u1NyUGJr1R9ln2vYQ0uDFWMDAcs1hW9OEJW2H0ZBl1tkB-0ZysZk9nWKqjk0Og&usqp=CAU',
  },
]

const TechnologiesChain = () => {
  return (
    <div className="inline-flex relative">
      {images.map(({ url, name }) => (
        <Image key={name} src={url} alt={url} />
      ))}
    </div>
  )
}

export default TechnologiesChain
