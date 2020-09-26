import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from '../components/page-title'
import SlugHeader from '../components/slug-header'

import formatPhoneNumber from '../utils/format-phone'

const Contact = () => {
  const ourPhone = '‪9293240223‬'
  const ourEmail = 'carluccicomptonparty@gmail.com'
  const boxHousePhone = '7183833800'

  return (
    <>
      <SEO
        title={`Michele & Josh are getting married!`}
        description={`Get in touch`}
      />
      
      <Layout contentPage>
        <section className="cc-section">
          <PageTitle 
            title="Contact"
          />

          <SlugHeader
            title="Get ahold of Josh &amp; Michele"
            header="h2"
          />

          <SlugHeader
            title="Phone"
            header="h3"
          />

          <p>
            We've set up a Google Voice number for wedding stuff, texting is preferred!
            <br />
            <a href={`tel://${ourPhone}`}>{formatPhoneNumber(ourPhone)}</a>
          </p>

          <SlugHeader
            title="Email"
            header="h3"
          />
          <p>
            We've also set up a special email inbox for wedding stuff, send us notes &amp; photos!
            <br />
            <a href={`mailto://${ourPhone}`}>{ourEmail}</a>
          </p>

          <SlugHeader
            title="Box house hotel"
            header="h2"
          />
          <p>
            For booking, parking, and general venue info, contact the Box House Hotel at:
            <br />
            <a href={`tel://${boxHousePhone}`}>{formatPhoneNumber(boxHousePhone)}</a>
          </p>
        </section>
      </Layout>
    </>
  )
}

export default Contact
