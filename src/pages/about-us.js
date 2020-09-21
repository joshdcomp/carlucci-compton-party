import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Home } from "../components/icons";

const AboutUs = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout>
        <h1 className="cc-text-header-20 cc-layout--title">
          <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
          About Us
        </h1>

        <p>We cute!</p>
      </Layout>
    </>
  )
}

export default AboutUs
