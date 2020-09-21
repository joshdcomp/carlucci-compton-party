import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Home } from "../components/icons";

const TripPlanning = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout>
        <h1 className="cc-text-header-20 cc-layout--title">
          <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
          Planning
        </h1>

        <p>Get out here!</p>
      </Layout>
    </>
  )
}

export default TripPlanning
