import React from "react"
import dayjs from 'dayjs'
import PropTypes from "prop-types"

import useWeddingDate from '../utils/use-wedding-date'

const InfoCard = ({ siteTitle }) => {
  const { old, current, format } = useWeddingDate()

  return (
    <section className={`cc-layout--card cc-layout--card-info`}>
      <ul className="cc-info_list">
        <li className="cc-info_list--li">
          <strong>When:</strong>
  
          <span className="cc-text-strike">{dayjs(old, format).format('MMMM D, YYYY')}</span>
          <span>{dayjs(current, format).format('MMMM D, YYYY')}</span>
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
}

InfoCard.propTypes = {
  siteTitle: PropTypes.string,
}

InfoCard.defaultProps = {
  siteTitle: ``,
}

export default InfoCard
