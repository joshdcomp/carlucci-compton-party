import React from 'react'
import { Link } from 'gatsby'
import InfoCard from "../components/info-card";
import getClipClassName from '../utils/get-clip-classname'

import useBgSet from '../utils/use-bg-set'

const IntroTiles = () => {
    const { tiles } = useBgSet()

    return (
        <ul className="cc-tiles">
            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[0]}`}>
                <InfoCard />
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[1]}`}>
                <Link className="cc-tiles--tile_link" to={`/registry`}>
                    <span className="cc-button">Registry</span>
                </Link>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[2]}`}>
                <Link className="cc-tiles--tile_link" to={`/planning`}>
                    <span className="cc-button">Trip Planning</span>
                </Link>
            </li>
        </ul>
    )
}

export default IntroTiles