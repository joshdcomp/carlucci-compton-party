import React, { useState } from "react"
import { Link } from "gatsby"

import { AboutUs, Registry, Planning } from '../components/icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"

import RsvpForm, { AttendingTypes, VisitingTypes } from '../components/rsvp-form'

import getClipClassName from '../utils/get-clip-classname'
import useBgSet from '../utils/use-bg-set'
import useLocalStorage from '../utils/use-local-storage'
// import useWeddingDate from '../utils/use-wedding-date'

import "../styles/main.scss"

const Tiles = ({ t }) => {
  const { tiles } = useBgSet()

  return (
    <ul className="cc-tiles">
      {t.map(({ title, href, Icon }, i) => {
        return (
          <li key={`tile-${title}-${i}`} className={`cc-tiles--tile ${getClipClassName()} ${tiles[i]}`}>
            <Link className="cc-tiles--tile_link" to={href}>
              <span className="cc-tiles--icon"><Icon /></span>
              <h2 className="cc-tiles--title">{title}</h2>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const RSVP = () => {
  const attendingInit = AttendingTypes.not_answered
  const visitingInit = VisitingTypes.not_answered

  const [hasSubmitted, setHasSubmitted] = useLocalStorage('has_submitted_rsvp', false)
  const [attendingStatus, setAttendingType] = useLocalStorage('is_attending', attendingInit)
  const [visitingStatus, setVisitingType] = useLocalStorage('is_visiting', visitingInit)
  const [formShowing, setFormShowing] = useState(!hasSubmitted)

  const handleSuccess = ({attendingType, visitingType}) => {
    setFormShowing(false)
    setAttendingType(attendingType)
    setVisitingType(visitingType)
    setHasSubmitted(true)
  }
  const doResetForm = () => {
    setFormShowing(true)
    setAttendingType(attendingInit)
    setVisitingType(visitingInit)
    setHasSubmitted(false)
  }

  const messages = {
    attendingLocal: {
      title: `Thanks for your RSVP!`,
      content: (<>
        <p>Yay! We can't wait to party with you!</p>
      </>),
      tiles: [
        {
          title: 'About us',
          href: '/about-us',
          Icon: AboutUs,
        },
        {
          title: 'Registry',
          href: '/registry',
          Icon: Registry,
        },
      ]
    },
    attendingVisitor: {
      title: `Thanks for your RSVP!`,
      content: (<>
        <p>We can't wait to see you! Make sure to check out our <Link to="/trip-planning">trip info</Link> page for travel, hotel, and wedding day resources!</p>
      </>),
      tiles: [
        {
          title: 'About us',
          href: '/about-us',
          Icon: AboutUs,
        },
        {
          title: 'Registry',
          href: '/registry',
          Icon: Registry,
        },
        {
          title: 'Trip info',
          href: '/trip-planning',
          Icon: Planning,
        },
      ]
    },
    notAttending: {
      title: `Shucks, thanks for letting us know!`,
      content: (<>
        <p>We'll miss you but we'll be sure to have a drink for you! Don't be a stranger ok?</p>
      </>),
      tiles: [
        {
          title: 'About us',
          href: '/about-us',
          Icon: AboutUs,
        },
        {
          title: 'Registry',
          href: '/registry',
          Icon: Registry,
        },
      ]
    },
    default: {
      title: `Uhh`,
      content: (<>
        <p>this site uses your browser's localstorage...if you've made it here, your rsvp has submitted</p>
      </>),
      tiles: [
        {
          title: 'About us',
          href: '/about-us',
          Icon: AboutUs,
        },
        {
          title: 'Registry',
          href: '/registry',
          Icon: Registry,
        },
        {
          title: 'Trip info',
          href: '/trip-planning',
          Icon: Planning,
        },
      ]
    },
  }

  const getSuccessPage = () => {
    let rsvpMessage = messages.default
    if (attendingStatus === AttendingTypes.not_attending) {
      rsvpMessage = messages.notAttending
    } else if(attendingStatus === AttendingTypes.attending) {
      if (visitingStatus === VisitingTypes.visiting) {
        rsvpMessage = messages.attendingVisitor
      } else {
        rsvpMessage = messages.attendingLocal
      }
    }

    return (
      <div className="">
        <h2>{rsvpMessage.title}</h2>

        {rsvpMessage.content}

        <Tiles t={rsvpMessage.tiles} />
      </div>
    )
  }

  const rsvpForm = !hasSubmitted && formShowing
    ? (<RsvpForm
      onSuccess={handleSuccess}
      successMessage="Thanks for RSVP'ing! This box will close in a few seconds"
    />)
    : getSuccessPage()

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
        {
          hasSubmitted
            ? (
              <p className="cc-text-body-5 cc-util-margin-top-200">If you haven't already RSVP'd <button className="cc-button cc-bg-majorelle" type="button" onClick={doResetForm}>click here to reset</button>.</p>
            )
            : null
        }
      </Layout>
    </>
  )
}

export default RSVP