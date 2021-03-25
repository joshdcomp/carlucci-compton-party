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
  const { old, current, format } = useWeddingDate()

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
              to="/about-us"
              className="cc-nav--link"
              getProps={isPartiallyActive}
            >about us</Link>
          </li>
          <li className="cc-nav--item">
            <Link
              to="/trip-planning"
              className="cc-nav--link"
              getProps={isPartiallyActive}
            >trip planning</Link>
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
              <strong>When:</strong>
              <span className="cc-text-strike cc-text-no_wrap cc-util-margin-right-1">{dayjs(old, format).format('MMMM D, YYYY')}</span>
              <wbr />
              <span className="cc-text-no_wrap">{dayjs(current, format).format('MMMM D, YYYY')}</span>
            </li>
  
            <li className="cc-info_list--li">
              <strong>Where:</strong>
              <span>The Box House Hotel</span>
            </li>
  
            <li className="cc-info_list--li">
              <strong>Who:</strong>
              <span>Michele Carlucci &amp; Josh Compton</span>
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
