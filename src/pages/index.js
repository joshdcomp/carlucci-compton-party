import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from "../components/intro-text"
import IntroTiles from "../components/intro-tiles"

const HomePage = () => (
  <>
    <SEO
      title={`Michele & Josh are getting married!`}
      description={`Join us on May 7, 2022 for our wedding celebration!`}
    />

    <Layout>
        <IntroText />
        <IntroTiles />
    </Layout>
  </>
)

export default HomePage
