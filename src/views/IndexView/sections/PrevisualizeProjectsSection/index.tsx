import React from "react"
import FixedWrapperFullScreen from "common/FixedWrapperFullScreen"
import WobblyProgressAtomsLoading from "common/Loading/WobblyProgressAtomsLoading"
import useDelay from "hooks/useDelay"
import ClosePrevisualize from "./components/ClosePrevisualize"
import Subtitle from "common/Texts/Subtitle"
import styled from "styled-components"
import PreviewProject from "./containers/PreviewProject"
import ListProjects from "./containers/ListProjects"


const Wrapper = styled(FixedWrapperFullScreen)`
  width:calc(100% - var(--width-navigator));
  left:auto;
  right:0;
  z-index:1;
  .content__projects,.preview__projects {
    &::-webkit-scrollbar {
      width:10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color:rgba(100,100,100,.6);
    }
  }
`

const PrevisualizeProjectsSection = () => {
  const { completed } = useDelay({ auto: true, duration: 3000 })
  if (completed)
    return (
      <Wrapper>
        <div className="h-full w-full relative preview flex">
            <div className="content__projects p-10 overflow-y-auto">
              <div className="header">
                <div className="mb-2">
                  <Subtitle>5 projects</Subtitle>
                </div>
                <div className="span text-label mb-14 text-5xl font-bold">My projects</div>
              </div>
              <ListProjects/>
            </div>
            <PreviewProject/>
        </div>
        <ClosePrevisualize />
      </Wrapper>
    )
  return <WobblyProgressAtomsLoading duration={3000} text="Loading projects" />
}

export default PrevisualizeProjectsSection
