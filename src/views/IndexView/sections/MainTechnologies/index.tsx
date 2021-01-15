import React from "react"
import styled from "styled-components"
import SectionFullHeight from "layouts/SectionFullHeight"
import MiniCardTechonology from "./components/MiniCardTechonology";
import stackJson from "assets/json/stack.json"
import TitleLayerInformation from "common/Texts/TitleLayerInformation";

const MainTechnologiesWrapper = styled(SectionFullHeight)`
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.6);
  }
`

const MainTechnologiesSection = () => {
  return (
    <MainTechnologiesWrapper className="p-10 flex flex-col overflow-y-auto" data-id="skills">
      <div className="pb-10">
        <TitleLayerInformation 
          subtitle="Skill technologies"
          title="My skills and technologies" />
        <div className="text-label mt-10">My hard skills is in frontend development. Currenly I work more in react ecosystem.</div>
      </div>
      <div className="skills">
        {stackJson.map(({category,stacks},categoryKey) => {
            return(
              <div key={categoryKey} className="mb-10">
                <div className="grid grid-cols-6 gap-2">
                  {stacks.map(({image,name,detail},stackKey)=>(
                    <MiniCardTechonology key={stackKey} image={image} text={name} />
                  ))}
                </div>
              </div>
            )
        })}
      </div>
    </MainTechnologiesWrapper>
  )
}

export default MainTechnologiesSection
