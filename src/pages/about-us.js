import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from '../components/page-title'

const AboutUs = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout contentPage>
        <section className="cc-section">
          <PageTitle
            title="About us"
          />

          <h2>Our Engagement Story</h2>

          <p>
            In the spring of 2019 with the help of their wonderful friends, Josh cooked up a scheme 
            to propose to Michele.
          </p>

          <p>
            Josh worked with Michele's friend Tia to schedule a 'photoshoot' with 'hip young people' 
            for a promotional event at one of their favorite neighborhood dive bars (Michele
            does not ask questions when it comes to Tia).
          </p>

          <p>
            On March 31, 2019, Michele and Josh donned their hippest, youngest clothes and walked at 
            what Josh thought was a leisurely (read: adrenaline addled) pace to 
            &nbsp;<a href="http://www.highdive-brooklyn.com/" target="__blank">High Dive</a>. On the way
            there, they heard a person scold his elderly dog pooping on the sidewalk: “That’s not very
            ladylike, <em>Liz</em>.”
          </p>

          <p>
            It was delightful, but Josh was walking much too fast to fully enjoy it.
          </p>

          <p>
            When they arrived, Tia was set up in the back patio ready to capture the moment&hellip;with one
            hitch: a pair of Park Slope moms fresh from morning yoga were <em>also</em> set up in the back patio,
            very close to Tia's area, and refusing to move (Brooklyn yard seating is serious business).
          </p>

          <p>
            As Tia started taking photos, one of these ladies asked if this was an engagement shoot
            <span className="cc-inline_icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
              </svg>
            </span>
          </p>

          <p>
            Josh and Tia smiled through gritted teeth saying it was not, but these ladies insisted on asking more
            questions&hellip;somewhere in the chaos Josh proposed. Lucily Michele was still surprised and said yes!
          </p>

          <p>
            As a final surprise, Josh had all their friends waiting next door. Soon as Michele said yes, everyone
            crowded into the patio and proceeded to drink celebratory High Lifes well into the night.
          </p>

          <h2>Engagement Photos</h2>

          <p>
            We went to Portugal <em>right</em> before the world turned upside down &amp; we did a cute lil photoshoot while we were there!
          </p>

          <p>
            <strong>Want prints?</strong> these are web photos, if you want printouts let us know which ones you want and
            we'll send them to you!
          </p>
        </section>
      </Layout>
    </>
  )
}

export default AboutUs
