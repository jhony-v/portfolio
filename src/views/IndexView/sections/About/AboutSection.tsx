import React from "react"
import styled from "styled-components"
import { FaLinkedinIn, FaGoogle, FaTwitter, FaDev } from "react-icons/fa"
import SectionFullHeight from "layouts/SectionFullHeight";
import useAboutScroll from "./hooks/useAboutScroll";
import FixedBox from "common/FixedBaseFigures/FixedBox";
import Subtitle from 'common/Texts/Subtitle';

const AboutWrapper = styled(SectionFullHeight)``

const sizeSocialButton = 60;
const SocialButton = styled.a.attrs({ target: "_blank" })`
  width: ${sizeSocialButton}px;
  height: ${sizeSocialButton}px;
  background-color: #e7e7e7;
  color:#707070;
  font-size:1.2em;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:10px;
  margin-right:10px;
  transition:transform .3s;
  will-change:transform;
  &:hover {
    transform:scale(1.2);
  }
`

const TextShadow = styled.div`
  text-shadow: 0 20px 30px rgba(100, 100, 100, 0.2);
`


const AboutSection = () => {
  useAboutScroll();
  return (
    <AboutWrapper className="mx-auto flex items-center justify-center" data-id="about">
      <div className="about__boxs">
        <FixedBox opacity={0.1} left="0px" bottom="-100px" w="200px" h="350px"  />
        <FixedBox opacity={0.08} left="130px" bottom="200px" w="100px" h="100px"  />
        <FixedBox opacity={0.07} right="0" top="0px" w="400px" h="200px"  />
        <FixedBox opacity={0.06} right="200px" bottom="-100px" w="250px" h="200px"  />
        <FixedBox opacity={0.02} left="100px" top="200px" w="80%" h="65%" grayscale={.02}  />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Subtitle>About me</Subtitle>
        <TextShadow className="font-bold text-4xl mb-14 w-3/4 text-center text-black mt-6">
        Welcome to my <span className="text-purple-700 text-7xl">portfolio</span>, I believe you’re very nice
        </TextShadow>
        <div className="text-gray-400 text-center w-1/2">
          Frontend Developer with experience developing projects with technologies
          such as React, Vue, CI-CD, etc.
        </div>
        <div className="flex items-center justify-between mx-auto mt-10">
          <SocialButton href="https://twitter.com/JhonyV01"><FaTwitter/></SocialButton>
          <SocialButton href="https://www.linkedin.com/in/jhony-vega/"><FaLinkedinIn/></SocialButton>
          <SocialButton href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jhonyvegacuya24@gmail.com"><FaGoogle/></SocialButton>
          <SocialButton href="https://dev.to/jhony24"><FaDev/></SocialButton>
        </div>
      </div>
    </AboutWrapper>
  )
}

export default AboutSection
