import React from "react"
import SmoothText from "common/Texts/SmoothText"
import { animated } from "react-spring"
import styled from "styled-components"
import ImageCard from "./ImageCard"
import LinkButtonNavigate from "./LinkButtonNavigate"

const Wrapper = styled(animated.div)`
  width: 80%;
  transition: 0.3s;
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
        <LinkButtonNavigate />
      </div>
     <ImageCard src={image} />
    </Wrapper>
  )
}
