import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RegistryContent from "../components/content-registry"

const Registry = () => {

  return (
    <>
      <SEO
        title={`Michele & Josh's registry`}
        description={`We've got stuff, consider donating to one of these organizations`}
      />
      
      <Layout contentPage>
        <RegistryContent />
      </Layout>
    </>
  )
}

export default Registry
