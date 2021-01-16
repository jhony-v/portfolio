import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SectionFullHeight from "layouts/SectionFullHeight"
import MiniCardTechonology from "./components/MiniCardTechonology"
import stackJson from "assets/json/stack.json"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"
import Subtitle from "common/Texts/Subtitle"

const MainTechnologiesWrapper = styled(SectionFullHeight)`
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.6);
  }
`

type ButtonLinkCategoryProps = {
  text: string
  selected?: boolean,
  onClick: (id : string) => void,
  id : string,
}
const ButtonLinkCategory = ({
  text,
  selected,
  onClick,
  id,
}: ButtonLinkCategoryProps) => {

  const handlerOnClick = () => onClick(id)
  return (
    <div
      onClick={handlerOnClick}
      className={`mr-8 border-b-2 cursor-pointer text-gray-300 font-bold pb-4 pt-4 ${
        selected ? "border-primary text-primary" : "border-transparent"
      }`}
    >
      {text}
    </div>
  )
}

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
  const [data, setData] = useState([]);
  const [ category , setCategoryId ] = useState("Frontend");
  const setCategory = (id) => {
    setData(stackJson.find(e => e.category === id).stacks);
    setCategoryId(id);
  } 

  useEffect(() => {
      setData(stackJson[0].stacks);
  },[]);

  return (
    <MainTechnologiesWrapper
      className="p-10 flex flex-col overflow-y-auto"
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
        <div className="flex items-center mt-5">
          {dataFilter.map((e) => (
            <ButtonLinkCategory key={e.id} text={e.text} selected={e.id === category} id={e.id} onClick={setCategory} />
          ))}
        </div>
      </div>
      <div className="skills relative">
        <div className="grid grid-cols-6 gap-2 mb-10">
          {data.map(({ image, name, detail }, stackKey) => (
            <MiniCardTechonology key={stackKey} image={image} text={name} />
          ))}
        </div>
      </div>
    </MainTechnologiesWrapper>
  )
}

export default MainTechnologiesSection
