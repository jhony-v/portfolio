import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import SmoothText from "common/Texts/SmoothText"
import Subtitle from "common/Texts/Subtitle"
import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import { BsArrowRightShort } from 'react-icons/bs';

const Wrapper = styled(animated.div)`
  width: 80%;
  transition: 0.3s;
  & .project__detail {
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
    .project__detail {
      margin-left:80px;
    }
    .project__image {
      transform:perspective(400px)rotateY(20deg);
      & .backdrop {
        transform:translate(-5%,5%);
      }
    }
  }
  &:nth-child(odd) {
    .project__detail {
      margin-right:80px;
    }
    .project__image {
      transform:perspective(400px)rotateY(-20deg);
      & .backdrop {
        transform:translate(5%,5%);
      }
    }
  }
`

const WrapperImage = styled.div`
  width: 500px;
  flex:none;
  display:flex;
  height: 300px;
  position: relative;
  transform-style:preserve-3d;
  & .image {
    border-radius:15px;
    object-fit:cover;
    width:90%;
    height:100%;
    z-index:1;
  }
  & .backdrop {
    position:absolute;
    width:90%;
    height:100%;
    border-radius:10px;
    background-color:var(--primary-color);
  }
`


const Image = ({src}) => {
  return(
    <WrapperImage className="project__image">
      <div className="backdrop"></div>
      <img src={src} className="image" />
    </WrapperImage>
  )
}

export default function ProjectCard({ image, title }) {
  return (
    <Wrapper className="flex justify-between mb-52 ml-auto mr-auto items-center">
      <div className="p-4 project__detail">
        <p className="text-label text-2xl mb-3 mt-3 font-bold">{title}</p>
        <SmoothText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste
          consectetur odio unde quisquam quod rem eaque eius culpa porro.
          Asperiores a quia laboriosam facere. Ad recusandae distinctio
          voluptate eum!.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nulla veniam aut ad ut asperiores repudiandae dolor tempore optio recusandae molestias ex quod rerum ea porro eos, nobis explicabo tempora!
        </SmoothText>
        <div className="mt-8">
          <Subtitle>
              <div className="flex items-center">
                VIEW DETAILS
                <BsArrowRightShort className="mr-3" size={30} />
              </div>
          </Subtitle>
        </div>
      </div>
     <Image src={image} />
    </Wrapper>
  )
}
