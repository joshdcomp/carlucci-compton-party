import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Home } from "../components/icons";

const Contact = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout>
        <h1 className="cc-text-header-20 cc-layout--title">
          <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
          Contact
        </h1>

        <p>Our phone number!</p>

        <p>Box house hotel!</p>
      </Layout>
    </>
  )
}

export default Contact
