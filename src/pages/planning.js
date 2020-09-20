import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import getClipClassName from "../utils/get-clip-classname"

import IconHome from "../components/icons/home";

const Registry = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout>
        <h1 className="cc-text-header-20 cc-layout--title">
          <Link to="/" className="cc-layout--title_home_link"><IconHome /></Link>
          Planning
        </h1>

        <p>Get out here!</p>
      </Layout>
    </>
  )
}

export default Registry
