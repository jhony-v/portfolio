import TitleLayerInformation from "common/Texts/TitleLayerInformation"
import React from "react"
import { usePrevisualizeProject } from "../../contexts/PrevisualizeProject/PrevisualizeProjectContext"

export default function TitleProjects() {
  const { listProjects } = usePrevisualizeProject()  
  return (
    <div className="header w-4/5 m-auto">
      <TitleLayerInformation
        subtitle={`${listProjects.length} projects`}
        title="My projects"
        className="mb-14"
      />
    </div>
  )
}
