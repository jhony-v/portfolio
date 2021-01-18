import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import SmoothText from "common/Texts/SmoothText"
import React, { useState } from "react"
import styled from "styled-components"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import {
  ExternalLinks,
  usePrevisualizeProject,
} from "../../contexts/PrevisualizeProject/PrevisualizeProjectContext"
import useNavigateBetweenProjects from "../../hooks/useNavigateBetweenProjects"
import { animated, useSpring, useTransition } from "react-spring"

const BackgroundBackdropWrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.97);
`
const BackgroundWrapper = styled(animated.div)<{ image: string }>`
  display: flex;
  background: url("${props => props.image}") no-repeat top / cover;
  ${BackgroundBackdropWrapper} {
    width: 100%;
    height: 100%;
  }
`

const PreviewImageBackdrop = styled(BackgroundWrapper)`
  border: 2px solid white;
  width: 100%;
  position: relative;
  height: 400px;
`

const ButtonChangeProject = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 1.2rem;
  color: black;
`

const Wrapper = styled(animated.div)`
  .preview__navigator {
    width: 55%;
  }
  .preview__detail {
    width: 45%;
  }
`


const ChevronMove = ({children, onClick,position}) => {
  return(
    <div className={`${position}-3 absolute top-1/2 text-3xl transform -translate-1/2`} onClick={onClick}>
      {children}
    </div>
  )
}

const ChevronsChangeProject = () => {
  const { onNext, onPrevious } = useNavigateBetweenProjects();
  return(
    <>
      <ChevronMove onClick={onPrevious}  position="left"><BsChevronLeft/></ChevronMove>
      <ChevronMove onClick={onNext} position="right"><BsChevronRight/></ChevronMove>
    </>
  )
}


const ItemTabNavigator = ({ text, selected }) => {
  return (
    <span
      className={`text-label text-center block p-3 w-full border-b-2 ${
        selected ? "border-secondary" : "border-transparent"
      }`}
    >
      {text}
    </span>
  )
}


const CardTechnologyUsed = ({image,title}) => (
  <div className="bg-white rounded-3xl inline-flex items-center py-3 px-5 mr-4 mb-4">
      <img className="w-5 h-5 object-cover" src={image} />
      <span className="font-bold ml-2">{title}</span>
  </div>
)

export default function PreviewProject() {
  const {
    showing,
    currentProject: { description, image, title, links, technologies },
  } = usePrevisualizeProject()

  const transitionShowingWrapper = useTransition(showing, null, {
    from: {
      opacity: 0,
      transform : 'translateY(100%)'
    },
    enter: {
      opacity: 1,
      transform : 'translateY(0px)'
    },
    leave: {
      opacity: 0,
      transform : 'translateY(100%)'
    },
  });

  return (
    <>
      {transitionShowingWrapper.map(
        ({ item, key, props }) =>
          item && (
            <Wrapper key={key} style={props} className="absolute left-0 top-0 w-full h-full bg-gray-200">
              <div className=" w-11/12 md:w-5/6 mx-auto mt-14 md:flex project__detail mb-24">
                <div className="flex md:w-1/2">
                    <div className="rounded-3xl border-white border-2 shadow-2xl overflow-hidden md:w-4/5" style={{height:"300px"}}>
                      <img className="w-dull h-full object-cover" src={image} />
                    </div>
                </div>
                <div className="md:w-1/2">
                  <div className="text-4xl md:text-5xl mb-10 mt-10 md:mt-0">{title}</div>
                  <p className="text-gray-400">
                    {description}
                  </p>
                  <div className="options mt-10 flex items-center">
                    <BasePrimaryButton>WATCH DEMO</BasePrimaryButton>
                    <div className="ml-3">
                      <BaseRoundedButton>VIEW CODE</BaseRoundedButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project__technologies w-5/6 mx-auto">
                <div className="text-lg mb-5 font-bold">Technologies</div>
                <div className="list__project-technologies flex flex-wrap">
                  {technologies.map((item,index) => (
                  <CardTechnologyUsed image={item.image} title={item.name} key={index} />
                  ))}
                </div>
              </div>
              <ChevronsChangeProject/>
            </Wrapper>
          )
      )}
    </>
  )
}
