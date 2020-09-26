import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from '../components/page-title'
import SlugHeader from '../components/slug-header'

import getClipClassName from '../utils/get-clip-classname'
import formatPhoneNumber from '../utils/format-phone'

const TripPlanning = () => {
  const bhPhone = '7183833800'
  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />

      <Layout contentPage>
        <section className="cc-section">

          <PageTitle
            title="Trip Planning"
          />

          <SlugHeader
            title="Getting to the City"
            header="h2"
          />
          
          <SlugHeader
            title="Fly"
            header="h3"
          />

          <p><strong>Note:</strong> We’re in uncertain times, we suggest buying refundable tickets.</p>

          <p>
            New York is served by three major airports: JFK, LaGuardia (LGA), and Newark (EWR). They’re
            not great :upside_down_face:. You’ll be tempted by slightly cheaper fares to book Newark,
            but just be warned that it’s a hike to get to and from, and the cab rates are more expensive
            …book LGA or JFK if you can.
          </p>

          <p>
            Taxis are a part of life in New York! When you land the least painful way (especially with
            luggage) to get to your destination is by taking a yellow cab. A cab from JFK or LaGuardia
            will cost around $50-60; from Newark, it’s closer to $80. Go straight to the yellow taxi
            line…Lyft and Uber will be a hassle, and the dudes offering car service inside will try and
            scam you in some way or other.
          </p>
          
          <SlugHeader
            title="Road trip"
            header="h3"
          />

          <p>
            Entering Manhattan through the Holland or Lincoln Tunnel is for romcoms and people who like
            to sit in traffic for 3 hours (ask Josh’s parents about their first trip to the city!). If
            you’re driving to NYC from out of town, we’d recommend planning your trip to come through
            Michele’s home borough of Staten Island and cross into Brooklyn over the majestic Verrazzano
            Bridge (you get a better view of the skyline anyway).
          </p>

          <p>
            <strong>Be aware:</strong> all driving entrances to NYC incur a toll of $16-19, you’ll get
            a bill in the mail a few weeks later.
          </p>

          <SlugHeader
            title="Staying in the city"
            header="h2"
          />

          <SlugHeader
            title="Sleep"
            header="h3"
          />

          <p>
            <strong>Note:</strong> Many hotels have suspended online booking for now, your best bet is to
            call the hotel directly.
          </p>


          <SlugHeader
            title="Here for a long time"
            header="h4"
          />
          <p>
            The Box House Hotel is a fabulous venue for a special event, but it’s not an ideal vacation hub.
            If you’re planning on an extended stay in NYC, we suggest booking somewhere more centrally&ndash;accessible (we’ll have Lyft credits for getting to and from the venue within the five boroughs).
            For neighborhood recommendations, please reach out to Michele and Josh!
          </p>

          <SlugHeader
            title="Here for a good time"
            header="h4"
          />
          <p>
            If you’re just staying in NYC for the night, stay in Greenpoint! Below is information for our
            Box House block and other hotels nearby.
          </p>

          <SlugHeader
            title="Box House Hotel"
            header="h5"
          />
          <p>
            Rooms are being held at the venue hotel for wedding attendees. To ensure that rooms are still
            available at the discounted rate, it’s best to book via phone at <a href={`tel://${bhPhone}`}>{formatPhoneNumber(bhPhone)}</a> 
            &nbsp;and provide the following information:
          </p>

          <p>
            <strong>Group:</strong> Carlucci/Compton Wedding
            <br />
            <strong>Group Folio Number:</strong> 270019
          </p>

          <img
            alt="The Box House Hotel"
            src="/assets/box-house-1.jpg"
            className={`cc-img ${getClipClassName()}`}
          />

          <SlugHeader
            title="Nearby Hotels"
            header="h5"
          />
          <p>
            Other hotels in the Greenpoint area include the Henry Normal Hotel (10-minute drive); the Franklin
            Guesthouse (10-minute walk or 5-minute drive); and the apartment-style Habitat 101 Brooklyn
            (10-minute drive).
          </p>

          <iframe
            title="Other hotels near the Box House Hotel"
            src="https://www.google.com/maps/d/u/0/embed?mid=1LCtuZmW9_Lg26BNnKBqVSLyut3dIZJr7"
            width="100%"
            height="480"
            frameborder="0"
            className="cc-clip-1"
            style={{border:0}}
          />
        </section>

        <section className="cc-section">

          <SlugHeader
            title="Wedding day!"
            header="h1"
          />

          <SlugHeader
            title="Getting to the venue"
            header="h2"
          />
          <SlugHeader
            title="Cab/Lyft"
            header="h3"
          />
          <p>
            Lyft credits will be available to bring you to and from the venue if you are staying anywhere within
            the five boroughs. Make somebody else drive, we wanna party with you!
          </p>

          <SlugHeader
            title="Drive"
            header="h3"
          />
          <p>
            If you gotta drive yourself, street parking in the area is technically available…but not guaranteed.
            A better plan is probably to use one of the garages (see the map) within a few minutes walk of the
            venue.
          </p>

          <iframe
            title="Parking near the Box House Hotel"
            src="https://www.google.com/maps/d/embed?mid=1-ftYQ4mWcO4ss9WLmj8WA7gJVMyFmaPj"
            width="100%"
            height="480"
            frameborder="0"
            className="cc-clip-1"
            style={{border:0}}
          />

          <SlugHeader
            title="Public Transit"
            header="h3"
          />
          <p>
            While we’re hoping buses and subways will be a viable way of getting to the venue by May 2021,
            transit options in Greenpoint are still a little limited. Coming from South Brooklyn, you’re
            looking at a mix of the G train and the B43 bus. Ask Michele and Josh for transit tips!
          </p>
          <iframe
            title="Public transit near the Box House Hotel"
            src="https://www.google.com/maps/d/u/0/embed?mid=10tgvgGV0B6huTz8s12IsoapfiG160VsR"
            width="100%"
            height="480"
            frameborder="0"
            className="cc-clip-1 cc-embedded_map"
            style={{border:0}}
          />
        </section>
      </Layout>
    </>
  )
}

export default TripPlanning
