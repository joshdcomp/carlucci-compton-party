import React from "react"
import dayjs from 'dayjs'

import PageTitle from '../components/page-title'
import SlugHeader from '../components/slug-header'
import MapEmbed from "../components/map-embed"

import useWeddingDate from '../utils/use-wedding-date'

const ScheduleContent = () => {

  const { current, format } = useWeddingDate()

  return (
    <>
      <section className="cc-section">
        <PageTitle
          title="Party Schedule"
        />

        <SlugHeader
          title="Wedding week!"
          header="h2"
        />

        <SlugHeader
          title="Welcome party"
          header="h3"
        />

        <p>Come enjoy the calm before the storm with us:</p>

        <p className="cc-text-body-5">
          <strong>When:</strong>&nbsp;
          <span
            className="cc-text-no_wrap"
          >
            May 6th, 2022 at 7:30pm
          </span>
        </p>

        <p className="cc-text-body-5">
          <strong>Where:</strong>&nbsp;
          <span>
            <a
              href="https://www.google.com/maps/place/Spritzenhaus33/@40.7232892,-73.9548945,17z/data=!3m2!4b1!5s0x89c2594485b6b8b9:0x3a08baf1126564e8!4m5!3m4!1s0x89c259448f9fe1fd:0xdb8de662ae8f43ca!8m2!3d40.7232892!4d-73.9527058"
              target="_blank"
              rel="noreferrer"
            >Spritzenhaus</a>
          </span>
        </p>

        <SlugHeader
          title="Wedding day!"
          header="h2"
        />

        <p>Please join us to celebrate:</p>

        <SlugHeader
          title="Ceremony with reception to follow"
          header="h3"
        />

        <p className="cc-text-body-5">
          <strong>When:</strong>&nbsp;
          <span className="cc-text-no_wrap">{dayjs(current, format).format('MMMM D, YYYY')} at 4:30pm</span>
        </p>

        <p className="cc-text-body-5">
          <strong>Where:</strong>&nbsp;
          <span>The Box House Hotel</span>
        </p>

        <SlugHeader
          title="After party!"
          header="h3"
        />

        <p className="cc-text-body-5">
          <strong>When:</strong>&nbsp;
          <span className="cc-text-no_wrap">11pm</span>
        </p>

        <p className="cc-text-body-5">
          <strong>Where:</strong>&nbsp;
          <span>
            <a
              href="https://www.google.com/maps/place/Grand+Republic+Cocktail+Club/@40.7297776,-73.9621953,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2596a86bedb3d:0x78c5366f36d6e03f!8m2!3d40.7297803!4d-73.9600023"
              target="_blank"
              rel="noreferrer"
            >Grand Republic Cocktail Club</a>
          </span>
        </p>

        <p className="cc-text-body-10">
          <strong>We'll have transportation to Grand Republic from the Box House!</strong>
        </p>


        <SlugHeader
          title="Day after"
          header="h2"
        />
        <SlugHeader
          title="Farewell / recovery brunch"
          header="h3"
        />

        <p className="cc-text-body-5">
          <strong>When:</strong>&nbsp;
          <span className="cc-text-no_wrap">Sunday, May 8, 2022 at 10:00am</span>
        </p>

        <p className="cc-text-body-5">
          <strong>Where:</strong>&nbsp;
          <span>
            Brooklyn Lantern at the Box House Hotel
          </span>
        </p>
      </section>

      <section className="cc-section">
        <SlugHeader
          title="Getting to the venue"
          header="h1"
        />
        <SlugHeader
          title="Cab/Lyft"
          header="h2"
        />
        <p>
          Uber credits will be available to bring you to &amp; from the venue if you are staying anywhere within
          the five boroughs. Make somebody else drive, we wanna party with you!
        </p>

        <SlugHeader
          title="Drive"
          header="h2"
        />
        <p>
          If you gotta drive yourself, street parking in the area is technically available…but not guaranteed.
          A better plan is probably to use one of the garages within a few minutes walk of the
          venue.
        </p>

        <p>
          Below is a map with the garages we'd recommend:
        </p>

        <MapEmbed
          title="Parking near the Box House Hotel"
          embed="https://www.google.com/maps/d/u/0/embed?mid=1-ftYQ4mWcO4ss9WLmj8WA7gJVMyFmaPj"
          href="https://www.google.com/maps/d/viewer?mid=1-ftYQ4mWcO4ss9WLmj8WA7gJVMyFmaPj"
        />

        <SlugHeader
          title="Public transit"
          header="h2"
        />
        <p>
          While we’re hoping buses &amp; subways will be a viable way of getting to the venue by May 2021,
          transit options in Greenpoint are still a little limited. Coming from South Brooklyn, you’re
          looking at a mix of the G train &amp; the B43 bus. Ask Michele &amp; Josh for transit tips!
        </p>

        <p>
          Below is a map with the relevant transit stops:
        </p>

        <MapEmbed
          title="Public transit near the Box House Hotel"
          embed="https://www.google.com/maps/d/u/0/embed?mid=10tgvgGV0B6huTz8s12IsoapfiG160VsR"
          href="https://www.google.com/maps/d/viewer?mid=10tgvgGV0B6huTz8s12IsoapfiG160VsR"
        />
      </section>
    </>
  )
}

export default ScheduleContent
