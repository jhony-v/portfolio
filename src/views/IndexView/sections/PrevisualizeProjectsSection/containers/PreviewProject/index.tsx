import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import SmoothText from "common/Texts/SmoothText"
import React, { useState } from "react"
import styled from "styled-components"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const BackgroundBackdropWrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.97);
`
const BackgroundWrapper = styled.div<{ image: string }>`
  display: flex;
  background: url("${props => props.image}") no-repeat top / cover;
  box-shadow: 0 10px 30px rgba(50, 50, 50, 0.2);
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
  margin-right:20px;
  font-size:1.2rem;
  color:black;
`

const Wrapper = styled.div`
  .preview__navigator {
    width:55%;
  }
  .preview__detail {
    width:45%;
  }
`

const PreviewImageProject = () => {
  return (
    <div className="flex relative ml-auto w-full flex-col -right-12">
      <PreviewImageBackdrop image="project_images/facebook_clone.PNG" />
      <div className="flex relative top-10">
        <BasePrimaryButton>DEMO</BasePrimaryButton>
        <div className="options flex items-center ml-12">
        <a href="" className="text-black font-bold">Go to demo</a>
        <div className="bg-black w-14 mr-8 ml-8" style={{height:"2px"}} />
        <a href="" className="text-black font-bold">View code in Github</a>
        </div>
        <div className="flex ml-auto mr-10">
          <ButtonChangeProject><BsChevronLeft/></ButtonChangeProject>
          <ButtonChangeProject><BsChevronRight/></ButtonChangeProject>
        </div>
        </div>
    </div>
  )
}

const ItemTabNavigator = ({text,selected}) => {
  return(
    <span className={`text-label text-center block p-3 w-full border-b-2 ${selected ? 'border-secondary' : 'border-transparent'}`}>{text}</span>
  )
}

export default function PreviewProject() {
  return (
    <Wrapper className="absolute left-0 top-0 w-full h-full flex items-stretch bg-black">
      <div className="preview__navigator bg-white relative flex items-center">
        <PreviewImageProject />
      </div>
      <BackgroundWrapper
        image="project_images/facebook_clone.PNG"
        className="preview__detail"
      >
        <BackgroundBackdropWrapper className="flex items-center">
          <div
            className="pl-20 pr-20 pt-10 pb-10 w-11/12 flex flex-col"
            style={{ border: "2px solid rgb(50,50,50)",height:"90%" }}
          >
            <p className="text-label text-4xl font-bold mb-5">
              Facebook CLONE Application UI
            </p>
            <div className="preview__tabs__navigator flex mt-5 mb-14 w-full">
              <ItemTabNavigator text="Description" selected />
              <ItemTabNavigator text="Technologies" />
            </div>
            <SmoothText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              iusto quo ut repellendus fuga aliquam quam assumenda expedita
              ipsum, quidem, totam laboriosam? Ullam sint corrupti dolore harum,
              adipisci eius laboriosam?. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. 
            </SmoothText>
          </div>
        </BackgroundBackdropWrapper>
      </BackgroundWrapper>
    </Wrapper>
  )
}
