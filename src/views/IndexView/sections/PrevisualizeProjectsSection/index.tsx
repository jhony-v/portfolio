import React from "react"
import FixedWrapperFullScreen from "common/FixedWrapperFullScreen"
import WobblyProgressAtomsLoading from "common/Loading/WobblyProgressAtomsLoading"
import useDelay from "hooks/useDelay"
import ClosePrevisualize from "./components/ClosePrevisualize"
import ProjectCard from "./components/ProjectCard"
import Subtitle from "common/Texts/Subtitle"
import styled from "styled-components"
import PreviewProject from "./containers/PreviewProject"

const Wrapper = styled(FixedWrapperFullScreen)``

const PrevisualizeProjectsSection = () => {
  const { completed } = useDelay({ auto: true, duration: 3000 })
  if (completed)
    return (
      <Wrapper>
        <div className="h-full p-10 w-full relative">
          <div className="header">
            <div className="mb-2">
              <Subtitle>5 projects</Subtitle>
            </div>
            <div className="span text-label mb-10 text-5xl font-bold">My projects</div>
          </div>
          <div className="preview flex">
            <div className="list__projects grid grid-cols-3 gap-y-5 gap-x-5 auto-rows-max grid-flow-row-dense">
            <ProjectCard image="https://cdn.vox-cdn.com/thumbor/vPwf_IT-1YLYwgHmOVDnLaUZRts=/0x0:2048x1410/1200x800/filters:focal(861x542:1187x868)/cdn.vox-cdn.com/uploads/chorus_image/image/67272132/facebook_website_redesign_1.0.jpg" />
            <ProjectCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3KPdLmoOw77WpfJ_EcbNSoQKHcKI7qYMEw&usqp=CAU" />
            <ProjectCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwwkPj_3ZyFmaoLRJKQmoJFZQjOg-qZtiOw&usqp=CAU" />
            <ProjectCard image="https://i.redd.it/t67an8sbwjg21.png" />
            </div>
            <div className="preview__projects flex-none" style={{width:"500px"}}>
              <PreviewProject/>
            </div>
          </div>
        </div>
        <ClosePrevisualize />
      </Wrapper>
    )
  return <WobblyProgressAtomsLoading duration={3000} text="Loading projects" />
}

export default PrevisualizeProjectsSection
