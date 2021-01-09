import React from "react"
import styled from "styled-components"
import figure_dotted from "assets/figure_dotted.png"
import { FaLinkedinIn, FaGoogle, FaTwitter, FaDev } from "react-icons/fa"

const AboutWrapper = styled.div`
  margin-top: 13rem;
  margin-bottom: 8rem;
`

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

const AboutSection = () => {
  return (
    <AboutWrapper className="mx-auto flex items-center flex-col">
      <span className="font-bold block text-green-400">About me</span>
      <div className="font-bold text-4xl mb-10 w-3/6 text-center text-blue-900 mt-3">
        Welcome to my portfolio, I believe you’re very nice
      </div>
      <div className="text-gray-400 text-center w-5/12">
        Frontend Developer with experience developing projects with technologies
        such as React, Vue, CI-CD, etc.
      </div>
      <div className="flex items-center justify-between mx-auto mt-10">
        <SocialButton href="https://twitter.com/JhonyV01"><FaTwitter/></SocialButton>
        <SocialButton href="https://www.linkedin.com/in/jhony-vega/"><FaLinkedinIn/></SocialButton>
        <SocialButton href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jhonyvegacuya24@gmail.com"><FaGoogle/></SocialButton>
        <SocialButton href="https://dev.to/jhony24"><FaDev/></SocialButton>
      </div>
    </AboutWrapper>
  )
}

export default AboutSection
