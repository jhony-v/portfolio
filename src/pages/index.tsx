import React from "react"
import SEO from "common/SEO"
import WrapperRootNavigation from "layouts/WrapperRootNavigation"
import IndexView from "views/IndexView"
import ModalVisualizeProvider from "views/IndexView/contexts/ModalVisualize/ModalVisualizeProvider"

const IndexPage = () => (
  <SEO title="Jhony Vega - Portfolio" description="">
    <ModalVisualizeProvider>
      <WrapperRootNavigation>
        <IndexView />
      </WrapperRootNavigation>
    </ModalVisualizeProvider>
  </SEO>
)

export default IndexPage
