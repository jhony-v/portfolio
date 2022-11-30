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
  'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
  'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasNCg-u1NyUGJr1R9ln2vYQ0uDFWMDAcs1hW9OEJW2H0ZBl1tkB-0ZysZk9nWKqjk0Og&usqp=CAU',
]

const TechnologiesChain = () => {
  return (
    <div className="inline-flex relative">
      {images.map((image) => (
        <Image key={image} src={image} />
      ))}
    </div>
  )
}

export default TechnologiesChain
