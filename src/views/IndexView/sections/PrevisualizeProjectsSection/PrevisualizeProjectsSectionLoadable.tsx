import React, { useEffect } from "react"
import LoadableComponent from "common/LoadableComponent"
import { useModalVisualize } from "views/IndexView/contexts/ModalVisualize/ModalVisualizeContext"
import LoadingScreen from "./components/LoadingScreen"
import FixedWrapperFullScreen from "common/FixedWrapperFullScreen"

export default function PrevisualizeProjectsSectionLoadable() {
    const { modalActive } = useModalVisualize();

    return <>
      { modalActive === "projects" && <FixedWrapperFullScreen>
          <LoadableComponent module={() => import(".")} fallback={<LoadingScreen/>} />
        </FixedWrapperFullScreen>
      }
    </>
}
