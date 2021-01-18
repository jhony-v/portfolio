import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const StyledMenu = styled.div`
  ${tw`left-0 fixed top-10 md:block hidden`}
  .menu {
    width: var(--width-navigator);
    ${tw`bg-secondary text-3xl flex justify-center py-4 text-label font-bold`};
  }
`

const HanburgerMenu = () => {
  return (
    <StyledMenu>
      <div className="menu">
        J
      </div>
    </StyledMenu>
  )
}

export default HanburgerMenu
