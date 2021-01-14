import React from "react"
import styled from "styled-components"
import { FaLinkedinIn, FaTwitter, FaDev, FaGithub } from "react-icons/fa"
import SectionFullHeight from "layouts/SectionFullHeight";
import FixedBox from "common/FixedBaseFigures/FixedBox";
import Subtitle from 'common/Texts/Subtitle';
import BasePrimaryButton from "common/Buttons/BasePrimaryButton";

const AboutWrapper = styled(SectionFullHeight)`
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 95%);
  background:linear-gradient(-40deg,black 30%,rgba(0,0,0,.7)), url("public_images/code_1.jfif") no-repeat left top / auto 100%;
`

const sizeSocialButton = 60;
const SocialButton = styled.a.attrs({ target: "_blank" })`
  width: ${sizeSocialButton}px;
  height: ${sizeSocialButton}px;
  color:var(--third-color);
  font-size:1.4em;
  border-radius: 100%;
  display: flex;
  border:2px solid var(--secondary-color);
  align-items: center;
  justify-content: center;
  margin:20px 0;
  transition:transform .3s;
  will-change:transform;
  z-index:10;
  &:hover {
    transform:scale(1.2);
  }
`

const TextShadow = styled.div`
  text-shadow: 0 20px 30px rgba(100, 100, 100, 0.2);
`

const AboutSection = () => {
  return (
    <AboutWrapper className="mx-auto flex items-center " data-id="about">
      <div className="w-4/5 m-auto flex">
        <div className="about__detail flex flex-col">
          <Subtitle>About me</Subtitle>
          <TextShadow className="font-bold text-5xl mb-16 w-3/4 text-label mt-6 z-10">
            Frontend Developer with three years experiences in the industry technology
          </TextShadow>
          <div className="text-gray-400 w-1/2 z-10">
            Hello, my name Jhony Vega , I am from Peru, a person who loves technology and web development.
            My main experience is the frontend but also I worked with other technologies. I like to work in a team and to be constantly learning.
           </div>
           <div className="mt-8">
            <BasePrimaryButton>VIEW PROJECTS</BasePrimaryButton>
           </div>
        </div>
        <div className="about__contact flex items-center relative">
          <div className="flex flex-col items-center">
            <SocialButton href="https://www.linkedin.com/in/jhony-vega/"><FaLinkedinIn/></SocialButton>
            <SocialButton href="https://github.com/jhony-24"><FaGithub/></SocialButton>
            <SocialButton href="https://dev.to/jhony24"><FaDev/></SocialButton>
            <SocialButton href="https://twitter.com/JhonyV01"><FaTwitter/></SocialButton>
          </div>
        </div>
        <FixedBox right="0%" top="0%" w="400px" h="100%" grayscale={.06}  />
        <FixedBox right="0%" top="0%" w="400px" h="50%" grayscale={.04}  />
      </div>
    </AboutWrapper>
  )
}

export default AboutSection
