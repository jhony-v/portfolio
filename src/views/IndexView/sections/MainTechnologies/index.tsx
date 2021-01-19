import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SectionFullHeight from "layouts/SectionFullHeight"
import MiniCardTechonology from "./components/MiniCardTechonology"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"
import ButtonLinkCategory from "./components/ButtonLinkCategory"
import useFetchStack from "./hooks/useFetchStack"
import CurveAtomsLoading from "common/Loading/CurveAtomsLoading"

const MainTechnologiesWrapper = styled(SectionFullHeight)`
  @media screen and (min-width:540px) {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(100, 100, 100, 0.6);
    }
  }
`

const dataFilter = [
  {
    text : "Frontend",
    id: "Frontend"
  },  
  {
    text : "Backend",
    id: "Backend"
  },
  {
    text : "Database",
    id: "Database"
  },
  {
    text : "Utilities",
    id: "Utilities"
  },
]

const MainTechnologiesSection = () => {
  const { ref , data, filterByCategory, loading } = useFetchStack();
  const [ category , setCategoryId ] = useState("Frontend");
  const setCategory = (id) => {
    filterByCategory(id);
    setCategoryId(id);
  } 

  return (
    <MainTechnologiesWrapper
      className="sm:p-10 p-3 flex flex-col overflow-y-auto"
      data-id="skills"
    >
      <div className="pb-10">
        <TitleLayerInformation
          subtitle="Skill technologies"
          title="My skills and technologies"
        />
        <div className="text-label mt-10">
          My hard skills is in frontend development. Currenly I work more in
          react ecosystem.
        </div>
        <div className="flex items-center mt-5 overflow-x-auto">
          {dataFilter.map((e) => (
            <ButtonLinkCategory key={e.id} text={e.text} selected={e.id === category} id={e.id} onClick={setCategory} />
          ))}
        </div>
      </div>
      <div className="skills relative" ref={ref}>
        { loading ? (
            <div className="text-center my-20">
              <CurveAtomsLoading text="Loading technologies" />
            </div>
        ) :  (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 mb-10">
            {data.map(({ image, name }, stackKey) => (
              <MiniCardTechonology key={stackKey} image={image} text={name} />
            ))}
          </div>
        )}
      </div>
    </MainTechnologiesWrapper>
  )
}

export default MainTechnologiesSection
