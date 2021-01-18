import useNavigateToDataIdSection from "hooks/useNavigateToDataIdSection"
import React, { useState } from "react"
import styled from "styled-components"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import { AiOutlineCodeSandbox, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiPaperPlane } from "react-icons/bi"
import { BsCodeSlash } from 'react-icons/bs'
import ExternalLinks from "./components/ExternalLinks";
import LiItemNavigation from "./components/LiItemNavigation";
import tw from "twin.macro";

const HeaderWrapper = styled.header`
  display: flex;
  height:100%;
  border-right:1px solid rgba(200,200,200,.1);
`

const MainWrapper = styled.main`
  display:flex;
  overflow:auto;
  height:100%;
  @media screen and (max-width:768px) {
    height:calc(100% - var(--width-navigator));
  }
`;


const RootWrapper = styled.div`
  display:grid;
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:100%;
  grid-template-columns:var(--width-navigator) 1fr;
  @media screen and (max-width:768px) {
    display:block;
    --width-navigator : 60px;
    ${HeaderWrapper} {
      height:var(--width-navigator);
      ${tw`fixed bottom-0 left-0 w-full z-20`};
    }
  }
`



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
        <ul className="flex justify-center h-full md:flex-col items-center md:items-start">
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
