import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Home } from "../components/icons";

const TripPlanning = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />

      <Layout>
        <section className="cc-section">

          <h1 className="cc-text-header-20 cc-layout--title">
            <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
            Planning
          </h1>

          <h2>id me Getting to the City</h2>

          <h3>id me Fly</h3>

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

          <h3>id me Road trip</h3>

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


          <h2>id me Staying in the city</h2>

          <h3>id me Sleep</h3>

          <p>
            Note: Many hotels have suspended online booking for now, so if you’re having trouble finding
            availability, your best bet is to call the hotel directly.
          </p>


          <h3>id me Here for a long time</h3>
          <p>
            The Box House Hotel is a fabulous venue for a special event, but it’s not an ideal vacation hub.
            If you’re planning on an extended stay in NYC, we suggest booking somewhere more centrally-
            accessible (we’ll have Lyft credits for getting to and from the venue within the five boroughs).
            For neighborhood recommendations, please reach out to Michele and Josh!
          </p>

          <h3>id me Here for a good time</h3>
          <p>
            If you’re just staying in NYC for the night, stay in Greenpoint! Below is information for our
            Box House block and other hotels nearby.
          </p>

          <h3>id me Box House Hotel</h3>
          <p>
            Rooms are being held at the venue hotel for wedding attendees. To ensure that rooms are still
            available at the discounted rate, it’s best to book via phone at 718.383.3800 and provide the
            following information:
          </p>

          <p>
            Carlucci/Compton Wedding
            <br />
            Group Folio Number 270019
          </p>

          <p>
            Other hotels in the Greenpoint area include the Henry Normal Hotel (10-minute drive); the Franklin
            Guesthouse (10-minute walk or 5-minute drive); and the apartment-style Habitat 101 Brooklyn
            (10-minute drive).
          </p>
        </section>

        <section className="cc-section">

          <h1>id me Wedding day!</h1>

          <h2>id me Getting to the venue</h2>
          <h3>id me Cab/Lyft</h3>
          <p>
            Lyft credits will be available to bring you to and from the venue if you are staying anywhere within
            the five boroughs. Make somebody else drive, we wanna party with you!
          </p>

          <h3>id me Drive</h3>
          <p>
            If you gotta drive yourself, street parking in the area is technically available…but not guaranteed.
            A better plan is probably to use one of the garages (see the map) within a few minutes walk of the
            venue.
          </p>

          <h3>id me Transit</h3>
          <p>
            While we’re hoping buses and subways will be a viable way of getting to the venue by May 2021,
            transit options in Greenpoint are still a little limited. Coming from South Brooklyn, you’re
            looking at a mix of the G train and the B43 bus. Ask Michele and Josh for transit tips!
          </p>
        </section>


      </Layout>
    </>
  )
}

export default TripPlanning
