import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from '../components/page-title'
import SlugHeader from '../components/slug-header'
import Img from '../components/img'
import Carousel from '../components/carousel'

const AboutUs = () => {
  const highDive = [
    {
      src: '/assets/high_dive-1.jpg',
      alt: 'Josh proposes to Michele',
    },
    {
      src: '/assets/high_dive-2.jpg',
      alt: 'Michele clutches her pearls &amp; Josh laughs',
    },
    {
      src: '/assets/high_dive-3.jpg',
      alt: 'Michele’s ring-wearing hand holding champagne',
    },
    {
      src: '/assets/high_dive-4.jpg',
      alt: 'Michele &amp; Josh drink',
    },
    {
      src: '/assets/high_dive-5.jpg',
      alt: 'Josh &amp; Michele hold Bride &amp; Groom koozies',
    },
  ]

  const lisbon = [
    {
      src: '/assets/lisbon-1.jpg',
      alt: 'Michele &amp; Josh smooching in front of three buildings',
    },
    {
      src: '/assets/lisbon-2.jpg',
      alt: 'Michele &amp; Josh standing in front of a blue-green tiled wall',
    },
    {
      src: '/assets/lisbon-3.jpg',
      alt: 'Michele &amp; Josh look lovingly at each other below a tree with pink flowers',
    },
    {
      src: '/assets/lisbon-4.jpg',
      alt: 'Michele &amp; Josh stand in a doorway with a cable car behind them',
    },
    {
      src: '/assets/lisbon-5.jpg',
      alt: 'Michele &amp; Josh hug &amp; laugh in front of a cable car',
    },
  ]

  return (
    <>
      <SEO
        title={`About Josh & Michele!`}
        description={`Did you hear our engagement story? Check out our engagement pics`}
      />
      
      <Layout contentPage>
        <section className="cc-section">
          <PageTitle
            title="About us"
          />
          
          <SlugHeader
            title="Our engagement story"
            header="h2"
          />

          <p>
            In the spring of 2019 with the help of their wonderful friends, Josh cooked up a scheme 
            to propose to Michele.
          </p>

          <p>
            Josh worked with Michele's friend Tia to schedule a 'photoshoot' with 'hip young people' 
            for a promotional event at one of their favorite neighborhood dive bars (Michele
            does not ask questions when it comes to Tia).
          </p>

          <Img
            src={highDive[0].src}
            alt={highDive[0].alt}
            className="cc-img-2_up"
          />

          <Img
            src={highDive[1].src}
            alt={highDive[1].alt}
            className="cc-img-2_up cc-img-shift_down"
          />

          <p>
            On March 31, 2019, Michele &amp; Josh donned their hippest, youngest clothes &amp; walked at 
            what Josh thought was a leisurely (read: adrenaline addled) pace to <a href="http://www.highdive-brooklyn.com/" target="__blank" rel="noreferrer">High Dive</a>.
            On the way there, they heard a person scold his elderly dog pooping on the sidewalk: 
            “That’s not very ladylike, <em>Liz</em>.”
          </p>

          <p>
            It was delightful, but Josh was walking much too fast to fully enjoy it.
          </p>


          <p>
            When they arrived, Tia was set up in the back patio ready to capture the moment . . . with one
            hitch: a pair of Park Slope moms fresh from morning yoga were <em>also</em> set up in the back patio,
            very close to Tia's area, &amp; refusing to move (Brooklyn yard seating is serious business).
          </p>

          <Img
            src={highDive[2].src}
            alt={highDive[2].alt}
            className="cc-img-2_up cc-img-shift_down"
          />

          <Img
            src={highDive[3].src}
            alt={highDive[3].alt}
            className="cc-img-2_up"
          />

          <p>
            As Tia started taking photos, one of these ladies asked if this was an engagement shoot
            <span className="cc-inline_icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
              </svg>
            </span>
          </p>
          

          <p>
            Josh &amp; Tia smiled through gritted teeth saying it was not, but these ladies insisted on asking more
            questions . . . somewhere in the chaos Josh proposed. Luckily Michele was still surprised &amp; said yes!
          </p>

          <p>
            As a final surprise, Josh had all their friends waiting next door. Soon as Michele said yes, everyone
            crowded into the patio &amp; proceeded to drink celebratory High Lifes well into the night.
          </p>

          <Img
            src={highDive[4].src}
            alt={highDive[4].alt}
            className="cc-img-center"
          />

          <SlugHeader
            title="Engagement photos"
            header="h2"
          />

          <p>
            We went to Portugal <em>right</em> before the world turned upside down &amp; we did a cute lil photoshoot while we were there!
          </p>

          <Carousel slides={lisbon} />
        </section>
      </Layout>
    </>
  )
}

export default AboutUs
