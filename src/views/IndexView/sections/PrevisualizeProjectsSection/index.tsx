import React  from "react"
import PreviewProject from "./containers/PreviewProject"
import ListProjects from "./containers/ListProjects"
import WrapperSection from "./components/WrapperSection"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import WobblyScreenAnimation from "views/IndexView/components/animations/WobblyScreenAnimation"
import TitleLayerInformation from "common/Texts/TitleLayerInformation"
import PrevisualizeProjectProvider from "./contexts/PrevisualizeProject/PrevisualizeProjectProvider"

const PrevisualizeProjectsSection = () => {
  const { isEqual } = useModalVisualize();
  return (
    <>
      <WrapperSection visible={isEqual("projects")}>
        <PrevisualizeProjectProvider>
          <div className="h-full w-full flex-col overflow-y-auto relative preview flex p-10 content__projects">
              <div className="header w-4/5 m-auto">
                <TitleLayerInformation subtitle="5 projects" title="My projects" className="mb-14" />
              </div>
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
