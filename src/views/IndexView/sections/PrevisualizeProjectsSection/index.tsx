import React  from "react"
import Subtitle from "common/Texts/Subtitle"
import PreviewProject from "./containers/PreviewProject"
import ListProjects from "./containers/ListProjects"
import WrapperSection from "./components/WrapperSection"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import WobblyScreenAnimation from "views/IndexView/components/animations/WobblyScreenAnimation"

const PrevisualizeProjectsSection = () => {
  const { isEqual } = useModalVisualize();
  return (
    <>
      <WrapperSection visible={isEqual("projects")}>
        <div className="h-full w-full relative preview flex">
          <div className="content__projects p-10 overflow-y-auto">
            <div className="header">
              <div className="mb-2">
                <Subtitle>5 projects</Subtitle>
              </div>
              <div className="span text-label mb-14 text-4xl font-bold">
                My projects
              </div>
            </div>
            <ListProjects/>
          </div>
          <PreviewProject/>
        </div>
      </WrapperSection>
      <WobblyScreenAnimation text="Loading projects" isActiveInScreen="projects" />
    </>
  )
}

export default PrevisualizeProjectsSection
