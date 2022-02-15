import React from 'react'
import getClipClassName from '../utils/get-clip-classname'

import useBgSet from '../utils/use-bg-set'
import { BlackGirlsCode } from "../components/logos/black-girls-code";
import { TrevorProject } from "../components/logos/trevor-project";
import { UnionOfConcernedScientists } from "../components/logos/union-of-concerned-scientists";
import { Travel, House } from "../components/icons"

import PageTitle from './page-title'

const RegistryContent = () => {
    const { tiles } = useBgSet()

    return (
        <section className="cc-section">

            <PageTitle
                title="Registry"
            />

            <p>
              Thanks so much for thinking of us! We'd be so grateful if you'd pitch in to help send us on our honeymoon or buy our first home.
            </p>

            <ul className="cc-tiles">
              <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[0]}`}>
                <a
                  href="https://www.zola.com/registry/collection-item/5fb559961f12011a83df1e4f"
                  className="cc-tiles--tile_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="cc-tiles--icon"><Travel /></span>
                  <h2 className="cc-tiles--title">Travel fund</h2>
                </a>
              </li>

              <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[1]}`}>
                <a
                  href="https://www.zola.com/registry/collection-item/5fb559acead6dc2825cd7b86"
                  className="cc-tiles--tile_link cc-tiles--tile_link-logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="cc-tiles--icon"><House /></span>
                  <h2 className="cc-tiles--title">Home fund</h2>
                </a>
              </li>
            </ul>

            <p className="cc-text-align-center cc-text-full_width cc-util-margin-top-3">
              <a
                className="cc-button cc-text-white cc-bg-heinz cc-text-color-white"
                href="https://www.zola.com/registry/carlucci-compton-party?preview=true"
                target="_blank"
                rel="noreferrer"
              >
                See whole registry
              </a>
            </p>

            <p>
              Also please consider donating part or all of your planned wedding gift to these organizations:
            </p>

            <ul className="cc-tiles">
                <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[2]}`}>
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

                <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[3]}`}>
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

                <li className={`cc-tiles--tile ${getClipClassName()} ${tiles[4]}`}>
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
        </section>
    )
}

export default RegistryContent
