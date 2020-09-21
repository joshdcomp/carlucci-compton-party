import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const InfoCard = ({ siteTitle }) => (
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
  </section>
)

InfoCard.propTypes = {
  siteTitle: PropTypes.string,
}

InfoCard.defaultProps = {
  siteTitle: ``,
}

export default InfoCard
