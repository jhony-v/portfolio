import React from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"
import styled from "styled-components"
import useTechnologiesScroll from "./hooks/useTechnologiesScroll"
import SectionFullHeight from "layouts/SectionFullHeight"
import Subtitle from "common/Texts/Subtitle"
import FixedCircle from "common/FixedBaseFigures/FixedCircle"
import FixedBox from "common/FixedBaseFigures/FixedBox"

const MainTechnologiesWrapper = styled(SectionFullHeight)`
  clip-path: polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%);
  .technology__card {
    transition: 0.6s;
  }
  .technology__detail {
    transition: 0.7s;
  }
`

const WrapperCardTechnologies = styled.div`
  width: 80%;
  height: 500px;
  margin-left: 70px;
  border-radius: 10px;
`

const MiniCard = styled.div<PositionProps>`
  position: absolute;
  width: 110px;
  height: 140px;
  border-radius: 5px;
  background-color: rgb(0,0,0,.26);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  ${stylePosition};
`
const MiniCardTechonology = ({ text, image, left, top }) => (
  <MiniCard
    left={left}
    top={top}
    className="flex items-center flex-col justify-center"
  >
    <img src={image} alt={image} className="w-12 h-12 mb-2 rounded-full bg-white" />
    <span className="text-sm text-center text-label">{text}</span>
  </MiniCard>
)

const MainTechnologiesSection = () => {
  useTechnologiesScroll()

  return (
    <MainTechnologiesWrapper className="flex mt-48 mb-48 items-center bg-gradient-to-r from-primary to-secondary" data-id="technologies">
      <div className="left w-1/2">
        <WrapperCardTechnologies className="technology__card relative z-20">
          <MiniCardTechonology
            left="20px"
            top="40px"
            text="React"
            image="https://cdn.auth0.com/blog/react-js/react.png"
          />
          <MiniCardTechonology
            left="45%"
            top="80px"
            text="Jest"
            image="https://miro.medium.com/max/600/1*RQwRLQ0yyCvYmRn_Nst5yg.png"
          />
          <MiniCardTechonology
            left="80%"
            top="50px"
            text="Typescript"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          />
          <MiniCardTechonology
            left="35%"
            top="50%"
            text="Cypress"
            image="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/q1cwqhahz7jbtfzalznd"
          />
          <MiniCardTechonology
            left="15px"
            top="80%"
            text="Framer"
            image="https://www.tpisoftware.com/tpu/File/html/202009/20200929151429/images/20200926171128.png"
          />
          <MiniCardTechonology
            left="75%"
            top="70%"
            text="NextJS"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
          />
        </WrapperCardTechnologies>
      </div>
      <div className="right w-1/2 z-20">
        <div className="relative w-4/6 technology__detail">
          <Subtitle>My skills</Subtitle>
          <div className="text-label font-bold text-3xl mb-10 mt-4">
            Manage and know principal technologies
          </div>
          <p className="text-label mt-4 mb-10">
            I current Working with technologies such as ReactJS, typescript,
            Jest, CSS in JS, Vue, etc. So I worked with backend technologies:
            NodeJs, PHP, Flask, Java.
          </p>
          <BasePrimaryButton>Explore Technologies</BasePrimaryButton>
        </div>
      </div>
      <FixedBox right="0" top="0" h="100%" w="60%" grayscale={.1} />
      <FixedCircle right="10%" top="10%" d="100px" opacity={.3} />
      <FixedCircle right="20%" bottom="0%" d="300px" opacity={.2} />
      <FixedCircle left="10%" top="10%" d="300px" grayscale={.05} />
    </MainTechnologiesWrapper>
  )
}

export default MainTechnologiesSection
