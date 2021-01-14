import useNavigateToDataIdSection from "hooks/useNavigateToDataIdSection"
import React, { useState } from "react"
import styled from "styled-components"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import { AiOutlineCodeSandbox, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiPaperPlane } from "react-icons/bi"
import { BsCodeSlash } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const HeaderWrapper = styled.header`
  display: flex;
  height:100%;
  border-right:1px solid rgba(200,200,200,.1);
`

const MainWrapper = styled.main`
  display:flex;
  overflow:auto;
  height:100%;
`;

const Li = styled.li<{isSelected ?: boolean}>`
  transition: .3s;
  border-color:${props => props.isSelected && "var(--primary-color)"};
  color:${props => props.isSelected && "var(--primary-color)"};
  .tooltip {
    visibility:hidden;
    opacity:0;
    transition:.3s;
    right:0;
    transform:translateX(50%);
    background-color:var(--primary-color);
  }
  &:hover .tooltip {
    visibility:visible;
    opacity:1;
    transform:translateX(100%);
  }
`



const ExternalLinks = () => (
  <div className="left-7 fixed bottom-5 text-label">
    <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jhonyvegacuya24@gmail.com" target="_blank"
    className="mb-3 inline-block" title="email"
    >
      <AiOutlineMail size={20} />
    </a>
    <a href="https://github.com/jhony-24" target="_blank" title="github">
        <FaGithub size={20} />
    </a>
  </div>
)

const RootWrapper = styled.div`
  display:grid;
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:100%;
  grid-template-columns:var(--width-navigator) 1fr;
`

const LiItemNavigation = ({ to, icon : IconComponent, onClick, selected }) => {
  const isSelected = to === selected;
  const onLinkSelected = (e) => {
    onClick(to);
  }
  return(
    <Li className="pt-4 pb-4 border-l-4 w-full flex justify-center border-transparent relative text-white" isSelected={isSelected}>
      <span className="text-2xl cursor-pointer" onClick={onLinkSelected}><IconComponent /></span>
      <span className="tooltip absolute text-white shadow-md p-2 rounded-lg z-20">{to.replace("#","")}</span>
    </Li>
  )
}

type WrapperRootNavigationProps = {
  children: React.ReactNode
}
export default function WrapperRootNavigation({ children }: WrapperRootNavigationProps) {
  const { setModalActive } = useModalVisualize();
  const { onNavigate } = useNavigateToDataIdSection();
  const [ selected , setSelected ] = useState("home");
  const handlerOnLinkSelected = (to : string) => {
    setSelected(to);
    if(!/(projects|contact)/.test(to)) { 
      onNavigate(to) 
      setModalActive("");
    }
    else setModalActive(to);
  }

  return (
    <RootWrapper>
      <HeaderWrapper className="bg-black flex flex-col header__navigator">
        <ul className="flex flex-col justify-center h-full">
          <LiItemNavigation to="home" selected={selected} icon={AiOutlineHome} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="about" selected={selected} icon={AiOutlineUser} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="skills" selected={selected} icon={BsCodeSlash} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="projects" selected={selected} icon={AiOutlineCodeSandbox} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="contact" selected={selected} icon={BiPaperPlane} onClick={handlerOnLinkSelected} />
        </ul>
        <ExternalLinks/>
      </HeaderWrapper>
      <MainWrapper>
        {children}
      </MainWrapper>
    </RootWrapper>
  )
}
