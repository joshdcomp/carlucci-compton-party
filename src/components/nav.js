import React, { useState } from "react"
import classnames from 'classnames'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import dayjs from 'dayjs'


import { Menu, Close } from '../components/icons'

import useBgSet from "../utils/use-bg-set";
import useWeddingDate from '../utils/use-wedding-date'

const Nav = () => {
  const [ navIsOpen, setNavOpen ] = useState(false)
  const { nav:navBg } = useBgSet()
  const { current, format } = useWeddingDate()

  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: "cc-nav--link cc-nav--link-is_active" }
      : {}
  }

  const navClasses = classnames(
    'cc-layout--nav cc-nav',
    {'cc-nav-is_open': navIsOpen},
    navBg,
  )
  return (
    <nav className={navClasses}>
      <button
        className="cc-nav--trigger"
        onClick={() => setNavOpen(!navIsOpen)}
      >
          <span className="cc-nav--trigger_icon_open"><Menu /></span>
          <span className="cc-nav--trigger_icon_close"><Close /></span>
      </button>
      <div className="cc-nav--content">
        <ul className="cc-nav--list">
          <li className="cc-nav--item">
            <Link
              to="/"
              className="cc-nav--link"
            >home</Link>
          </li>
          <li className="cc-nav--item">
            <Link
              to="/trip-planning"
              className="cc-nav--link"
              getProps={isPartiallyActive}
            >travel</Link>
          </li>
          <li className="cc-nav--item">
            <Link
              to="/registry"
              className="cc-nav--link"
              getProps={isPartiallyActive}
            >registry</Link>
          </li>
          <li className="cc-nav--item">
            <Link
              to="/contact"
              className="cc-nav--link"
              getProps={isPartiallyActive}
            >contact</Link>
          </li>
        </ul>

        <section className={`cc-layout--card cc-layout--card-info`}>
          <ul className="cc-info_list">
            <li className="cc-info_list--li">
              <strong>When:</strong>&nbsp;
              <Link
                title="Schedule!"
                className="cc-text-no_wrap cc-util-margin-right-1 cc-text-no_decoration"
                to="/schedule"
              >
                {dayjs(current, format).format('MMMM D, YYYY')}
              </Link>
              <wbr />
              (<Link
                title="Schedule!"
                className="cc-text-no_wrap cc-nav--link"
                getProps={isPartiallyActive}
                to="/schedule"
              >full schedule</Link>)

            </li>

            <li className="cc-info_list--li">
              <strong>Where:</strong>
              <span>The Box House Hotel</span>
            </li>

            <li className="cc-info_list--li">
              <strong>Who:</strong>
              <span>
                <Link
                  to="/about-us"
                  className="cc-text-no_wrap"
                  getProps={isPartiallyActive}
                >Michele Carlucci &amp; Josh Compton</Link>
              </span>
            </li>

            <li className="cc-info_list--li">
              <strong>What:</strong>
              <span>Party!</span>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
