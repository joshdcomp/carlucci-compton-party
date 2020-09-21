import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RegistryContent from "../components/content-registry"

const Registry = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout>
        <RegistryContent />
      </Layout>
    </>
  )
}

export default Registry
