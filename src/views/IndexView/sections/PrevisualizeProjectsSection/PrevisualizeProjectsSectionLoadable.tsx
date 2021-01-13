import React from "react"
import LoadableComponent from "common/LoadableComponent"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"

export default function PrevisualizeProjectsSectionLoadable() {
    const { modalActive } = useModalVisualize();
    return <>
      { modalActive === "projects" &&  <LoadableComponent module={() => import(".")} fallback={null} />}
    </>
}
