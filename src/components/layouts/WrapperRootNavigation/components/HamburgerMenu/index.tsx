import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import styled from "styled-components"
import tw from "twin.macro"

const StyledMenu = styled.div`
  ${tw`left-0 fixed top-10 md:block hidden md:cursor-pointer`}
  .menu {
    width: var(--width-navigator);
    ${tw`bg-secondary text-2xl flex justify-center py-4`};
  }
`

const HanburgerMenu = () => {
  return (
    <StyledMenu>
      <div className="menu">
        <AiOutlineMenu />
      </div>
    </StyledMenu>
  )
}

export default HanburgerMenu
