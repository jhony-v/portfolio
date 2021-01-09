import LinkNavigation from "common/LinkNavigation"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  height: var(--height-navigation);
  background-color: transparent;
  position:fixed;
  width:100%;
  z-index:100;
`

const LiItemNavigation = ({ to, text }) => (
  <li className="pl-4 pr-4">
    <LinkNavigation to={to}>{text}</LinkNavigation>
  </li>
)

type WrapperRootNavigationProps = {
  children: React.ReactNode
}
export default function WrapperRootNavigation({ children }: WrapperRootNavigationProps) {
  return (
    <>
      <HeaderWrapper>
        <ul className="flex items-center h-full justify-center w-full">
          <LiItemNavigation to="/" text="Welcome" />
          <LiItemNavigation to="/about" text="About me" />
          <LiItemNavigation to="/skills" text="Skills" />
          <LiItemNavigation to="/projects" text="All Projects" />
        </ul>
      </HeaderWrapper>
      {children}
    </>
  )
}
