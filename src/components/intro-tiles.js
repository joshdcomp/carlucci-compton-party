import React from 'react'
import { Link } from 'gatsby'
import getClipClassName from '../utils/get-clip-classname'

import useBgSet from '../utils/use-bg-set'
import { AboutUs, Registry, Planning } from '../components/icons'

const IntroTiles = () => {
    const { tiles } = useBgSet()

    return (
        <ul className="cc-tiles">
            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[0]}`}>
                <Link className="cc-tiles--tile_link" to={`/about-us`}>
                    <span className="cc-tiles--icon"><AboutUs /></span>

                    <h2 className="cc-tiles--title">About Us</h2>
                </Link>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[1]}`}>
                <Link className="cc-tiles--tile_link" to={`/registry`}>
                    <span className="cc-tiles--icon"><Registry /></span>

                    <h2 className="cc-tiles--title">Registry</h2>
                </Link>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[2]}`}>
                <Link className="cc-tiles--tile_link" to={`/trip-planning`}>
                    <span className="cc-tiles--icon"><Planning /></span>

                    <h2 className="cc-tiles--title">Planning</h2>
                </Link>
            </li>
        </ul>
    )
}

export default IntroTiles