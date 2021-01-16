import React from "react"
import styled from "styled-components"
import { FaLinkedinIn, FaTwitter, FaDev, FaGithub } from "react-icons/fa"
import SectionFullHeight from "layouts/SectionFullHeight";
import FixedBox from "common/FixedBaseFigures/FixedBox";
import BasePrimaryButton from "common/Buttons/BasePrimaryButton";
import TitleLayerInformation from "common/Texts/TitleLayerInformation";
import ExternalLinkSocialButton from "common/Buttons/ExternalLinkSocialButton";
import SmoothText from "common/Texts/SmoothText";
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext";

const AboutWrapper = styled(SectionFullHeight)`
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 95%);
  background:linear-gradient(-40deg,black 30%,rgba(0,0,0,.7)), url("public_images/code_1.jfif") no-repeat left top / auto 100%;
`

const AboutSection = () => {
  const { setModalActive } = useModalVisualize();
  const handlerOnNavigateToProjects = () => {
    setModalActive("projects");
  }
  return (
    <AboutWrapper className="mx-auto flex items-center " data-id="about">
      <div className="w-11/12 sm:w-4/5 m-auto flex flex-col sm:flex-row">
        <div className="about__detail flex flex-col">
          <TitleLayerInformation 
            className="mb-16 sm:w-3/4 z-10 sm:mt-0 mt-4 md:w-full" 
            subtitle="About me" 
            title="Frontend Developer with three years experiences in the industry technology" />
          <SmoothText className="w-full md:w-11/12 sm:w-1/2 z-10">
            Hello, my name Jhony Vega , I am from Peru, a person who loves technology and web development.
            My main experience is the frontend but also I worked with other technologies. I like to work in a team and to be constantly learning.
          </SmoothText>
           <div className="mt-8">
            <BasePrimaryButton onClick={handlerOnNavigateToProjects}>VIEW PROJECTS</BasePrimaryButton>
           </div>
        </div>
        <div className="about__contact flex justify-between md-100::justify-self-auto items-center relative sm:flex-col flex-row mt-10 mb-8 md:mb-0 md:mt-0">
            <ExternalLinkSocialButton href="https://www.linkedin.com/in/jhony-vega/"><FaLinkedinIn/></ExternalLinkSocialButton>
            <ExternalLinkSocialButton href="https://github.com/jhony-24"><FaGithub/></ExternalLinkSocialButton>
            <ExternalLinkSocialButton href="https://dev.to/jhony24"><FaDev/></ExternalLinkSocialButton>
            <ExternalLinkSocialButton href="https://twitter.com/JhonyV01"><FaTwitter/></ExternalLinkSocialButton>
        </div>
        <FixedBox right="0%" top="0%" w="400px" h="100%" grayscale={.06}  />
        <FixedBox right="0%" top="0%" w="400px" h="50%" grayscale={.04}  />
      </div>
    </AboutWrapper>
  )
}

export default AboutSection
