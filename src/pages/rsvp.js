import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"

import "../styles/main.scss"

const RSVP = () => {
  return (
    <>
      <SEO
        title={`We hope to see you there!`}
        description={`Remember, it's Saturday May 7`}
      />

      <Layout contentPage>
        <section className="cc-section">
          <PageTitle
            title={<>We hope to see you there!</>}
          />
          <p className="cc-text-body-5 cc-util-margin-top-200">
            Check the <Link to="/schedule">Schedule</Link> for details!
          </p>
        </section>
      </Layout>
    </>
  )
}

export default RSVP
