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
                    We have a new date!
                </h1>


                <p className="cc-banner--message">
                  Unfortunately, the ongoing pandemic has forced us to
                  move our wedding celebration.
                </p>

                <p className="cc-text-body-10">
                  While things are certainly improving, we want everyone to join us
                  worry-free, and enjoy New York in all its glory!
                </p>


            </div>
        </aside>
    )
}
export default CovidBanner
