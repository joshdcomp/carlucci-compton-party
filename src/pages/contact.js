import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from '../components/page-title'
import SlugHeader from '../components/slug-header'
import CopyTooltip from '../components/copy-tooltip'

import formatPhoneNumber from '../utils/format-phone'

const Contact = () => {
  const ourPhone = '‪9293240223‬'
  const ourEmail = 'carluccicomptonparty@gmail.com'
  const boxHousePhone = '7183833800'

  return (
    <>
      <SEO
        title={`Contact Josh & Michele!`}
        description={`Get in touch with us or the hotel`}
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
            We've set up a Google Voice number for wedding stuff, texting is preferred!&nbsp;
            <CopyTooltip copyText={formatPhoneNumber(ourPhone)}>
              <a href={`tel://${ourPhone}`}>{formatPhoneNumber(ourPhone)}</a>
            </CopyTooltip>
          </p>

          <SlugHeader
            title="Email"
            header="h3"
            />
          <p>
            We've also set up a special email inbox for wedding stuff, send us notes &amp; photos!&nbsp;
            <CopyTooltip copyText={ourEmail}>
              <a href={`mailto://${ourEmail}`}>{ourEmail}</a>
            </CopyTooltip>
          </p>

          <SlugHeader
            title="Box House Hotel"
            header="h2"
          />
          <p>
            For booking, parking, and general venue info, contact the Box House Hotel at:&nbsp;
            <CopyTooltip copyText={formatPhoneNumber(boxHousePhone)}>
              <a href={`tel://${boxHousePhone}`}>{formatPhoneNumber(boxHousePhone)}</a>
            </CopyTooltip>
          </p>
        </section>
      </Layout>
    </>
  )
}

export default Contact
