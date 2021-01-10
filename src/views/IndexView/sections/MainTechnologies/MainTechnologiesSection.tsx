import React from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import stylePosition, { PositionProps } from "common/StyledSystem/stylePosition"
import styled from "styled-components"
import useTechnologiesScroll from "./hooks/useTechnologiesScroll"

const MainTechnologiesWrapper = styled.div`
  .technology__card {
    transition: 0.6s;
  }
  .technology__detail {
    transition: 0.7s;
  }
`

const WrapperCardTechnologies = styled.div`
  width: 80%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.07), 0 -10px 10px rgba(0, 0, 0, 0.02);
  height: 500px;
  margin-left: 70px;
  transform-style: preserve-3d;
  transform: perspective(400px) rotateY(6deg) rotateX(4deg);
  border-radius: 10px;
`

const MiniCard = styled.div<PositionProps>`
  position: absolute;
  width: 90px;
  height: 110px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04);
  ${stylePosition};
`
const MiniCardTechonology = ({ text, image, left, top }) => (
  <MiniCard
    left={left}
    top={top}
    className="flex items-center flex-col justify-center"
  >
    <img src={image} alt={image} className="w-8 h-8 mb-1" />
    <span className="text-xs text-center">{text}</span>
  </MiniCard>
)

const MainTechnologiesSection = () => {
  useTechnologiesScroll()

  return (
    <MainTechnologiesWrapper className="flex mt-48 mb-48 items-center">
      <div className="left w-1/2">
        <WrapperCardTechnologies className="technology__card relative">
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
      <div className="right w-1/2">
        <div className="relative w-4/6 technology__detail">
          <div className="text-blue-900 font-bold text-3xl">
            Manage and know principal technologies
          </div>
          <p className="text-gray-400 mt-4 mb-4">
            I current Working with technologies such as ReactJS, typescript,
            Jest, CSS in JS, Vue, etc. So I worked with backend technologies:
            NodeJs, PHP, Flask, Java.
          </p>
          <BasePrimaryButton>See more</BasePrimaryButton>
        </div>
      </div>
    </MainTechnologiesWrapper>
  )
}

export default MainTechnologiesSection
