import React  from "react"
import PreviewProject from "./containers/PreviewProject"
import ListProjects from "./containers/ListProjects"
import WrapperSection from "./components/WrapperSection"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import WobblyScreenAnimation from "views/IndexView/components/animations/WobblyScreenAnimation"
import PrevisualizeProjectProvider from "./contexts/PrevisualizeProject/PrevisualizeProjectProvider"
import TitleProjects from "./containers/TitleProjects"

const PrevisualizeProjectsSection = () => {
  const { isEqual } = useModalVisualize();
  return (
    <>
      <WrapperSection visible={isEqual("projects")}>
        <PrevisualizeProjectProvider>
          <div className="h-full w-full flex-col overflow-y-auto relative preview flex sm:p-10 pt-3 content__projects">
              <TitleProjects/>
              <ListProjects/>
          </div>
          <PreviewProject/>
        </PrevisualizeProjectProvider>
      </WrapperSection>
      <WobblyScreenAnimation text="Loading projects" isActiveInScreen="projects" />
    </>
  )
}

export default PrevisualizeProjectsSection
