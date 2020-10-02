import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married! But not here...`} />
      
      <Layout>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist. . . the sadness.</p>
      </Layout>
    </>
  )
}

export default NotFoundPage
