import React from "react"
import SmoothText from "common/Texts/SmoothText"
import { animated } from "react-spring"
import styled from "styled-components"
import ImageCard from "./ImageCard"
import LinkButtonNavigate from "./LinkButtonNavigate"
import {
  Project,
  usePrevisualizeProject,
} from "../../contexts/PrevisualizeProject/PrevisualizeProjectContext"

const Wrapper = styled(animated.div)`
  width: 80%;
  transition: 0.3s;
  @media screen and (min-width:1024px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
      .project__detail {
        margin-left: 80px;
      }
    }
    &:nth-child(odd) {
      .project__detail {
        margin-right: 80px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
      .project__image {
        transform: perspective(400px) rotateY(20deg);
        & .backdrop {
          transform: translate(-5%, 5%);
        }
      }
    }
    &:nth-child(odd) {
      .project__image {
        transform: perspective(400px) rotateY(-20deg);
        & .backdrop {
          transform: translate(5%, 5%);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    flex-direction: column-reverse;
    background-color: rgba(100, 100, 100, 0.2);
    .project__image {
      .backdrop {
        transform: none;
      }
    }
  }
`

interface ProjectCardProps {
  project: Project
}
export default function ProjectCard({ project }: ProjectCardProps) {
  const { description, image, title } = project
  const { setCurrentProject, setShowing } = usePrevisualizeProject()
  const onSelectProject = () => {
    setCurrentProject(project)
    setShowing(true)
  }
  return (
    <Wrapper className="flex justify-between rounded-lg w-11/12 mb-52 ml-auto mr-auto phone-100:ml-auto phone-100:mr-auto items-center sm:bg-dark-10">
      <div className="p-4 project__detail">
        <p className="text-label text-2xl mb-3 mt-3 font-bold">{title}</p>
        <SmoothText>
          {description}
        </SmoothText>
        <LinkButtonNavigate onClick={onSelectProject} />
      </div>
      <ImageCard src={image} />
    </Wrapper>
  )
}
