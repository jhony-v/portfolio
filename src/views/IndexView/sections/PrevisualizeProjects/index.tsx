import React  from "react"
import PreviewProject from "./containers/PreviewProject"
import WrapperSection from "./components/WrapperSection"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import WobblyScreenAnimation from "views/IndexView/components/animations/WobblyScreenAnimation"
import PrevisualizeProjectProvider from "./contexts/PrevisualizeProject/PrevisualizeProjectProvider"
import LoadableComponent from "common/LoadableComponent"

const PrevisualizeProjects = () => {
  const { isEqual } = useModalVisualize();
  return (
    <>
      <WrapperSection visible={isEqual("projects")}>
        <PrevisualizeProjectProvider>
          <div className="h-full w-full flex-col overflow-y-auto relative preview flex sm:p-10 pt-3 content__projects">
              <LoadableComponent fallback={null} module={()=>import("./containers/TitleProjects")} />
              <LoadableComponent fallback={null} module={()=>import("./containers/ListProjects")} />
          </div>
          <PreviewProject/>
        </PrevisualizeProjectProvider>
      </WrapperSection>
      <WobblyScreenAnimation text="Loading projects" isActiveInScreen="projects" />
    </>
  )
}

export default PrevisualizeProjects
