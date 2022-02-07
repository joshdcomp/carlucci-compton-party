import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"

import RsvpForm from '../components/rsvp-form'

import useLocalStorage from '../utils/use-local-storage'
// import useWeddingDate from '../utils/use-wedding-date'

import "../styles/main.scss"

const RSVP = () => {
  const [hasSubmitted, setHasSubmitted] = useLocalStorage('has_submitted_rsvp', false)
  const [formShowing, setFormShowing] = useState(!hasSubmitted)
  const handleSuccess = () => {
    // setFormShowing(false)
    // setHasSubmitted(true)
  }
  const doResetForm = () => setHasSubmitted(false)

  const rsvpForm = !hasSubmitted && formShowing
    ? (<RsvpForm
      onSuccess={handleSuccess}
      successMessage="Thanks for RSVP'ing! This box will close in a few seconds"
    />)
    : (<p>Looks like you already RSVP'd! If not, <button onClick={doResetForm}>click here to reset</button>.</p>)

  return (
    <>
      <SEO
        title={`RSVP for Josh & Michele's wedding!`}
        description={`Are you coming for May 7, 2022??`}
      />

      <Layout contentPage>
        <section className="cc-section">
          <PageTitle
            title="RSVP for our wedding!"
          />

          {rsvpForm}
        </section>
      </Layout>
    </>
  )
}

export default RSVP
