import React, { useState } from 'react'
import classnames from 'classnames'
import { ChevronUp, ChevronDown } from './icons'
import { Link } from 'gatsby'

const CovidBanner = () => {
    const [ isExpanded, setIsExpanded ] = useState(false)
    const chevron = (isExpanded)
        ? (<ChevronUp />)
        : (<ChevronDown />)
    const bannerClasses = classnames(
        'cc-layout--banner cc-banner',
        { 'cc-banner-is_open': isExpanded },
    )
    return (
      <aside className={bannerClasses}>
        <div className="cc-banner--inner">
          <h1
            className="cc-banner--title"
            onClick={() => { setIsExpanded(!isExpanded) }}
            onKeyPress={(e) => { e.preventDefault(); setIsExpanded(!isExpanded) }}
            role="button"
            tabIndex="0"
          >
            <i aria-hidden="true" className="cc-banner--title_icon">{chevron}</i>
            It's wedding week!!
          </h1>

          <p className="cc-banner--message">
            Please make sure everyone in your group is vaccinated &amp; boosted at least 2 weeks before attending!
          </p>

          <p className="cc-banner--message">
            <Link to="/schedule">Here's the schedule!</Link>
          </p>
        </div>
      </aside>
    )
}
export default CovidBanner
