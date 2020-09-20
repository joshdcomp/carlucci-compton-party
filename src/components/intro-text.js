import React from 'react'
// import { Link } from 'gatsby'

import useBgSet from '../utils/use-bg-set'

const IntroTiles = () => {
    const { shuffle } = useBgSet()

    return (
        <>
            <h1 className="cc-text-header-20 cc-layout--title" onClick={() => shuffle()}>Josh &amp; Michele</h1>

            <p className="cc-text-body-20">We're getting married!</p>

            <p className="cc-text-body-20">Save the date for our wedding celebration</p>
        </>
    )
}

export default IntroTiles