import FixedBox from "common/FixedBaseFigures/FixedBox"
import React from "react"
import ClosePrevisualize from "./components/ClosePrevisualize"
import ListProjects from "./containers/ListProjects"
import PreviewProject from "./containers/PreviewProject"

const PrevisualizeProjectsSection = ({}) => {
  return (
    <div className="flex h-full p-6 w-full relative">
      <ListProjects/>
      <PreviewProject/>
      <ClosePrevisualize />
    </div>
  )
}

export default PrevisualizeProjectsSection
