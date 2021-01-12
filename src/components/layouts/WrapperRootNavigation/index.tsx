import LinkNavigation from "common/LinkNavigation"
import useNavigateToDataIdSection from "hooks/useNavigateToDataIdSection"
import React, { useState } from "react"
import styled from "styled-components"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import { AiOutlineCodeSandbox, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiPaperPlane } from "react-icons/bi"
import { BsCodeSlash } from 'react-icons/bs'

const HeaderWrapper = styled.header`
  display: flex;
  position:fixed;
  width:var(--width-navigator);
  height:100%;
  left:0;
  z-index:50;
  border-right:1px solid rgba(200,200,200,.1);
`

const MainWrapper = styled.div`
  width:calc(100% - var(--width-navigator));
  margin-left:auto;
`

const Li = styled.li<{isSelected ?: boolean}>`
  transition: .3s;
  border-color:${props => props.isSelected && "var(--primary-color)"};
  color:${props => props.isSelected && "var(--primary-color)"};
`


const LiItemNavigation = ({ to, icon : IconComponent, onClick, selected }) => {
  const isSelected = to === selected;
  return(
    <Li className="pt-5 pb-5 border-l-4 w-full flex justify-center border-transparent text-white" isSelected={isSelected}>
      <LinkNavigation className="text-2xl" to={to} onClick={()=>onClick(to)}><IconComponent /></LinkNavigation>
    </Li>
  )
}

type WrapperRootNavigationProps = {
  children: React.ReactNode
}
export default function WrapperRootNavigation({ children }: WrapperRootNavigationProps) {
  const { setModalActive } = useModalVisualize();
  const { onNavigate } = useNavigateToDataIdSection();
  const [ selected , setSelected ] = useState("#home");
  const handlerOnLinkSelected = (to : string) => {
    setSelected(to);
    let getAlsoText = to.replace('#',''); 
    if(!getAlsoText.includes('projects')) onNavigate(getAlsoText);
    else setModalActive(getAlsoText);
  }

  return (
    <>
      <HeaderWrapper className="bg-black bg-opacity-70">
        <ul className="flex items-center h-full flex-col justify-center w-full">
          <LiItemNavigation to="#home" selected={selected} icon={AiOutlineHome} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#about" selected={selected} icon={AiOutlineUser} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#technologies" selected={selected} icon={BsCodeSlash} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#projects" selected={selected} icon={AiOutlineCodeSandbox} onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#contact" selected={selected} icon={BiPaperPlane} onClick={handlerOnLinkSelected} />
        </ul>
      </HeaderWrapper>
      <MainWrapper>
        {children}
      </MainWrapper>
    </>
  )
}
