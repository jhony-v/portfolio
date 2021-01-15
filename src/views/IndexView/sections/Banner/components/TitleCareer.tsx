import React from 'react'
import styled from 'styled-components'

const StyledTitleCareer = styled.h2`
  position: relative;
  text-shadow: 0 20px 30px rgba(0, 0, 0, .5);
  & * {
    transition:4s;
  }
  & .text-bubble {
    display:inline-block;
    will-change:transform;
    &:hover {
      transition:.3s;
      color:var(--secondary-color);
      transform:perspective(400px)scale(1.8)rotate3d(.2,1,0,-40deg);
    }
  }
`

const TitleCareer = () => {
    return (
        <StyledTitleCareer className="mb-12 mt-2 font-bold z-20 flex title__career">
            <span className="text-purple-700 text-6xl inline-flex mr-3">Frontend</span> 
            <span className="text-label text-7xl inline-flex">Developer</span>
        </StyledTitleCareer>
    )
}

export default TitleCareer
