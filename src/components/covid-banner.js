import React, { useState } from 'react'
import classnames from 'classnames'
import { ChevronUp, ChevronDown } from './icons'

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
                    onClick={() => {setIsExpanded(!isExpanded)}}
                    onKeyPress={(e) => {e.preventDefault();setIsExpanded(!isExpanded)}}
                    role="button"
                    tabIndex="0"
                >
                    <i aria-hidden="true" className="cc-banner--title_icon">{chevron}</i>
                    What about COVID?
                </h1>
                <p className="cc-banner--message">
                    Right now we gotta be cautiously optimistic, but we’ll only hold the event 
                    if we can guarantee the health &amp; safety of our guests. In the meantime, 
                    wear a friggin’ mask!
                </p>
            </div>
        </aside>
    )
}
export default CovidBanner
