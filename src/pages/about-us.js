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
      <section className="cc-section">
          <h1 className="cc-text-header-20 cc-layout--title">
            <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
            About Us
          </h1>

          <h2>Our Story</h2>

          <p>
            Michele and Josh met on OkCupid in January 2017, and after chatting for a bit, Michele gave
            Josh her number.
          </p>

          <p>
            He never texted her though! Rude.
          </p>

          <p>
            A few days later, Josh messaged her back on the app asking if she’d changed her mind…apparently
            Josh had copied her number wrong and was sending <del>hilariously clever and witty</del> texts
            into the ether never to be seen by Michele.
          </p>

          <p>
            That sorted, they started <em>actually</em> texting. Michele was in Atlantic City for a bachelor
            /ette party. She seduced him with lines like “In my Miller Lite jacket with no makeup and
            unbrushed hair“ and “I'm honestly the biggest bro at this table”. Josh countered with compliments
            on “The fliqueness of the eyebrows [sic]” and pics of Wash.
          </p>

          <p>
            They were both very good at texting.
          </p>

          <p>
            Josh’s first photographic evidence of Michele outside of the app were bathroom selfies in her
            Miller Lite jacket from the Wild West Bar in Bally’s. It was extremely classy and Michele gave
            off an elegant, poised, and sophisticated vibe…
          </p>

          <p>
            Coming out of that weekend Josh wasn’t fully convinced Michele was real…she had incredibly pretty
            eyes, was basically a Miller Lite brand ambassador, <em>demanded</em> pics of Wash, and liked
            gambling?
          </p>

          <p>
            Josh and Michele had their first date at Horseshoe Bar on Inauguration Day. Even though Michele
            was indeed real, spirits were still low. To cope, they drank many $5 Natty Light tallboys over games of Big Buck Hunter. This set the tone for the following months: while they got to know each other Josh and Michele made the circuit around Alphabet City’s dive bars, and eventually became ~official~ at another favorite: The Library, which has some unreal 2-for-1 happy hour specials, but we digress.
          </p>

          <p>
            In the next year, they’d travel to Josh’s home of Michigan, where Michele learned that Faygo is a
            real thing not just made up by the Insane Clown Posse; Mexico City, where they tried every
            micheleada; and Paris, where their relationship was accelerated the shared experience of having
            food poisoning in a studio apartment in a 6-floor walkup.
          </p>

          <p>
            Things to consider adding ^^:
          </p>

          <ul>

            <li>Vacation house and the unhinged stairwell</li>

            <li>Cooking…we made sausage for the first time!</li>

            <li>Hung out on the roof</li>
          </ul>

          <p>
            In May of 2018, they moved in together to an overpriced apartment in Brooklyn and found that they
            could totally live together successfully if they ignored the constant fighting of their two cats.
            Later that year, they’d spend New Year’s in Morocco, where Michele basically saw stars for the
            first time and realized that camels are actually much larger than horses. Who knew? Life went on.
          </p>
          <p>
            A few months later, with the help of their wonderful friends, Josh cooked up a scheme to propose. On
            March 31, 2019, they had plans to go to High Dive for what Michele had been told by her friend Tia was
            a test photoshoot for a promotional event (Michele does not ask questions when it comes to Tia). On the
            way there, they heard a person scold his elderly dog by saying, “That’s not very ladylike,
          <em>Liz</em>.” It was delightful, but Josh was walking too fast to fully enjoy it.
          </p>
          <p>
            They went to the backyard of the bar and Tia started taking photos. Then, some nosy women next to them
            asked if this was an engagement shoot; Josh and Tia basically screamed at them that it was not, and
            then somewhere in the chaos Josh actually proposed. Josh surprised Michele by having all their friends
            ready to celebrate, and they proceeded to drink celebratory High Lifes into the night.
          </p>
          <p>
            Fast forward a year and a half, and Michele and Josh have …………
          </p>
        </section>
      </Layout>
    </>
  )
}

export default AboutUs
