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

const PreviewImageProject = ({
  links: { demo, github },
  image,
}: {
  links: ExternalLinks
  image: string
}) => {
  const { onNext, onPrevious } = useNavigateBetweenProjects();
  return (
    <div className="flex relative ml-auto w-full flex-col -right-12">
      <PreviewImageBackdrop image={image} />
      <div className="flex relative top-10">
        <BasePrimaryButton>DEMO</BasePrimaryButton>
        <div className="options flex items-center ml-12">
          <a href={demo} target="_blank" className="text-black font-bold">
            Go to demo
          </a>
          <div className="bg-black w-14 mr-8 ml-8" style={{ height: "2px" }} />
          <a href={github} target="_blank" className="text-black font-bold">
            View code in Github
          </a>
        </div>
        <div className="flex ml-auto mr-10">
          <ButtonChangeProject onClick={onPrevious}>
            <BsChevronLeft />
          </ButtonChangeProject>
          <ButtonChangeProject onClick={onNext}>
            <BsChevronRight />
          </ButtonChangeProject>
        </div>
      </div>
    </div>
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

export default function PreviewProject() {
  const {
    showing,
    currentProject: { description, image, title, links },
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
  const transitionTitle = useSpring({
    transform : showing ? 'translateX(0%)' : 'translateX(100%)',
    config : {
      duration : 2000
    }
  });

  const transitionDetail = useSpring({
    transform : showing ? 'translateY(0%)' : 'translateY(200%)',
    config : {
      duration : 1000
    }
  });
  const transitionNavigator = useSpring({
    transform : showing ? 'translateY(0%)' : 'translateY(-200%)',
    config : {
      duration : 1000
    }
  });


  return (
    <>
      {transitionShowingWrapper.map(
        ({ item, key, props }) =>
          item && (
            <Wrapper key={key} style={props} className="absolute left-0 top-0 w-full h-full flex items-stretch bg-black">
              <animated.div style={transitionNavigator} className="preview__navigator bg-gray-100 relative flex items-center z-10">
                <PreviewImageProject links={links} image={image} />
              </animated.div>
              <BackgroundWrapper style={transitionDetail} image={image} className="preview__detail">
                <BackgroundBackdropWrapper className="flex items-center">
                  <div
                    className="pl-20 pr-20 pt-10 pb-10 w-11/12 flex flex-col"
                    style={{ border: "2px solid rgb(50,50,50)", height: "90%" }}
                  >
                    <animated.p style={transitionTitle} className="text-label text-4xl font-bold mb-5">
                      {title}
                    </animated.p>
                    <div className="preview__tabs__navigator flex mt-5 mb-14 w-full">
                      <ItemTabNavigator text="Description" selected />
                      <ItemTabNavigator text="Technologies" selected={false} />
                    </div>
                    <SmoothText>{description}</SmoothText>
                  </div>
                </BackgroundBackdropWrapper>
              </BackgroundWrapper>
            </Wrapper>
          )
      )}
    </>
  )
}
