import React from "react"
import BasePrimaryButton from "common/Buttons/BasePrimaryButton"
import BaseRoundedButton from "common/Buttons/BaseRoundedButton"
import styled from "styled-components"
import {  usePrevisualizeProject,} from "../../contexts/PrevisualizeProject/PrevisualizeProjectContext"
import { animated, useTransition } from "react-spring"
import startInClient from "utils/startInClient"
import openUrlNewTab from "utils/openUrlNewTab"
import LoadableComponent from "common/LoadableComponent"
import LoadingTechnologies from "./components/LoadingTechnologies"

const Wrapper = styled(animated.div)`
  overflow-y:auto;
`

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

  const onDemo = () => startInClient(() => {
    openUrlNewTab(links.demo);
  })
  
  const onCode = () => startInClient(() => {
    openUrlNewTab(links.github);
  });

  return (
    <>
      {transitionShowingWrapper.map(
        ({ item, key, props }) =>
          item && (
            <Wrapper key={key} style={props} className="absolute left-0 top-0 w-full h-full bg-black">
              <div className=" w-11/12 md:w-5/6 mx-auto mt-14 md:flex project__detail mb-24">
                <div className="flex md:w-1/2">
                    <div className="rounded-3xl flex w-full border-white border-2 shadow-2xl overflow-hidden md:w-4/5" style={{height:"300px"}}>
                      <img className="w-full h-full object-cover" src={image} />
                    </div>
                </div>
                <div className="md:w-1/2">
                  <LoadableComponent fallback={null} module={()=>import("./ChevronsChangeProject")} />
                  <div className="text-4xl md:text-5xl mb-10 mt-10 md:mt-0 text-label">{title}</div>
                  <p className="text-gray-400">
                    {description}
                  </p>
                  <div className="options mt-10 flex items-center">
                    <BasePrimaryButton onClick={onDemo}>WATCH DEMO</BasePrimaryButton>
                    <div className="ml-3">
                      <BaseRoundedButton onClick={onCode}>VIEW CODE</BaseRoundedButton>
                    </div>
                  </div>
                </div>
              </div>
              <LoadingTechnologies/>
              {/* <LoadableComponent fallback={<LoadingTechnologies/>} module={()=>import("./ListTechnologiesProject")} data={technologies} /> */}
            </Wrapper>
          )
      )}
    </>
  )
}
