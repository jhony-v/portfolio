import LinkNavigation from "common/LinkNavigation"
import useNavigateToDataIdSection from "hooks/useNavigateToDataIdSection"
import React, { useEffect } from "react"
import styled from "styled-components"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"

const HeaderWrapper = styled.header`
  display: flex;
  height: var(--height-navigation);
  background-color: transparent;
  position:fixed;
  width:100%;
  z-index:50;
`

const LiItemNavigation = ({ to, text, onClick }) => (
  <li className="pl-4 pr-4">
    <LinkNavigation to={to} onClick={()=>onClick(to)}>{text}</LinkNavigation>
  </li>
)

type WrapperRootNavigationProps = {
  children: React.ReactNode
}
export default function WrapperRootNavigation({ children }: WrapperRootNavigationProps) {
  const { setModalActive } = useModalVisualize();
  const { onNavigate } = useNavigateToDataIdSection();
  const handlerOnLinkSelected = (to : string) => {
    let getAlsoText = to.replace('#',''); 
    if(!getAlsoText.includes('projects')) onNavigate(getAlsoText);
    else setModalActive(getAlsoText);
  }

  return (
    <>
      <HeaderWrapper>
        <ul className="flex items-center h-full justify-center w-full">
          <LiItemNavigation to="#home" text="Welcome" onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#about" text="About me" onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#technologies" text="Skills" onClick={handlerOnLinkSelected} />
          <LiItemNavigation to="#projects" text="All Projects" onClick={handlerOnLinkSelected} />
        </ul>
      </HeaderWrapper>
      {children}
    </>
  )
}
