import styled, { css } from 'styled-components'
import GradientBox from '../GradientBox'
import SocialLinks from '../SocialLinks'

const sideCenter = css`
  display: flex;
  align-items: center;
  color: var(--text-light-color);
`
const sidesDistribution = css`
  flex: 1;
  height: 200px;
  ${sideCenter}
  @media (max-width: 768px) {
    display: none;
  }
`

const Left = styled(GradientBox)`
  ${sidesDistribution}
  clip-path: polygon(0% 0%, 70% 0%, 100% 40%, 100% 100%, 0% 100%);
`

const Right = styled(GradientBox)`
  ${sidesDistribution}
  clip-path: polygon(0% 40%, 40% 0%, 100% 0%, 100% 100%, 0% 100%);
`

const Center = styled(GradientBox)`
  flex-grow: 1.4;
  height: 60%;
  margin-top: auto;
  ${sideCenter}
  background: var(--alternative-color);
  @media (max-width: 768px) {
    background: transparent;
  }
`

const OutstandingWelcome = () => {
  return (
    <div className="py-24 relative grid md:grid-cols-3 gap-3">
      <Left align="right" />
      <Center className="p-3 md:p-6 flex-col gap-2">
        <p className="text-center">
          Hey There!, I am happy to get in touch with you and talk about
          programming
        </p>
        <SocialLinks />
      </Center>
      <Right align="left" />
    </div>
  )
}

export default OutstandingWelcome
