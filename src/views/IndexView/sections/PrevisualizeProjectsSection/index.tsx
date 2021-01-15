import React  from "react"
import PreviewProject from "./containers/PreviewProject"
import ListProjects from "./containers/ListProjects"
import WrapperSection from "./components/WrapperSection"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import WobblyScreenAnimation from "views/IndexView/components/animations/WobblyScreenAnimation"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"

const PrevisualizeProjectsSection = () => {
  const { isEqual } = useModalVisualize();
  return (
    <>
      <WrapperSection visible={isEqual("projects")}>
        <div className="h-full w-full relative preview flex">
          <div className="content__projects p-10 overflow-y-auto w-full">
            <div className="header w-4/5 m-auto">
              <TitleLayerInformation subtitle="5 projects" title="My projects" className="mb-14" />
            </div>
            <ListProjects/>
          </div>
        </div>
          <PreviewProject/>
      </WrapperSection>
      <WobblyScreenAnimation text="Loading projects" isActiveInScreen="projects" />
    </>
  )
}

export default PrevisualizeProjectsSection
