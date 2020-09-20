import React, { useState } from "react"
import classnames from 'classnames'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import getBGClassName from "../utils/get-bg-classname"

import IconMap from "../components/icons/menu"
import IconClose from "../components/icons/close"
import useBgSet from "../utils/use-bg-set";

const Nav = ({bgClass}) => {
  const [ navIsOpen, setNavOpen ] = useState(false)
  const { nav:navBg } = useBgSet()

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
          <span className="cc-nav--trigger_icon_open"><IconMap /></span>
          <span className="cc-nav--trigger_icon_close"><IconClose /></span>
      </button>
      <div className="cc-nav--content">
        <ul className="cc-nav--list">
          <li className="cc-nav--item">
            <Link to="/">about us</Link>
          </li>
          <li className="cc-nav--item">
            <Link to="/">wedding info</Link>
          </li>
          <li className="cc-nav--item">
            <Link to="/">registry</Link>
          </li>
          <li className="cc-nav--item">
            <Link to="/">contact</Link>
          </li>
        </ul>
        <section className={`cc-layout--card cc-layout--card-info`}>
          <ul className="cc-info_list">
            <li className="cc-info_list--li">
              <strong>When:</strong>
              <span>May 8, 2020</span>
            </li>
  
            <li>
              <strong>Where:</strong>
              <span>The Box House Hotel</span>
            </li>
  
            <li>
              <strong>Who:</strong>
              <span>Michele Carlucci &amp; Josh Compton</span>
            </li>
  
            <li>
              <strong>What:</strong>
              <span>Party!</span>
            </li>
          </ul>
          <Link to={`/info`} className="cc-button">Wedding info</Link>
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
