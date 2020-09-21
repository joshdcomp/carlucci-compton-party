import React from 'react'
import { Link } from 'gatsby'
import getClipClassName from '../utils/get-clip-classname'

import useBgSet from '../utils/use-bg-set'
import { Home } from '../components/icons'
import { BlackGirlsCode } from "../components/logos/black-girls-code";
import { TrevorProject } from "../components/logos/trevor-project";
import { UnionOfConcernedScientists } from "../components/logos/union-of-concerned-scientists";

const RegistryContent = () => {
    const { tiles } = useBgSet()

    return (<>
        <h1 className="cc-text-header-20 cc-layout--title">
            <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
            Registry
        </h1>

        <p className="cc-text-body-10">Registry coming soon, but in the meantime these folks could use your support&hellip;consider donating part or all of your planned wedding gift to these organizations:</p>

        <ul className="cc-tiles">
            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[0]}`}>
                <a 
                    href="https://donorbox.org/support-black-girls-code?default_interval=o"
                    className="cc-tiles--tile_link cc-tiles--tile_link-logo" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Donate to Black Girls Code"
                >
                    <BlackGirlsCode />
                </a>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[1]}`}>
                <a
                    href="https://www.ucsusa.org/about/ways-give"
                    className="cc-tiles--tile_link cc-tiles--tile_link-logo"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Donate to the Union of Concerned Scientists"
                    >
                    <UnionOfConcernedScientists />
                </a>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[2]}`}>
                <a
                    href="https://give.thetrevorproject.org/give/63307/#!/donation/checkout?c_src=website&c_src2=headerdonatebutton"
                    className="cc-tiles--tile_link cc-tiles--tile_link-logo"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Donate to the Trevor Project"
                >
                    <TrevorProject />
                </a>
            </li>
        </ul>
    </>)
}

export default RegistryContent