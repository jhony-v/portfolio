import React from "react"
import SEO from "common/SEO"
import WrapperRootNavigation from "layouts/WrapperRootNavigation"
import IndexView from "views/IndexView"

const IndexPage = () => (
  <SEO title="Jhony Vega - Portfolio" description="">
    <WrapperRootNavigation >
      <IndexView />
    </WrapperRootNavigation>
  </SEO>
)

export default IndexPage
