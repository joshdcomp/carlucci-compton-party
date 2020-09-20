import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import getClipClassName from "../utils/get-clip-classname"

import IconHome from "../components/icons/home";

const Registry = () => {

  return (
    <>
      <SEO title={`Michele & Josh are getting married!`} />
      
      <Layout>
        <h1 className="cc-text-header-20 cc-layout--title">
          <Link to="/" className="cc-layout--title_home_link"><IconHome /></Link>
          Registry
        </h1>

        <p>Registry coming soon, but in the meantime…</p>

        <ul className="cc-tiles">
            <li className={`cc-tiles--tile ${getClipClassName()}`}>
                <Link className="cc-tiles--tile_link" to={`/planning`}>
                    Black girls code
              </Link>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()}`}>
                <Link className="cc-tiles--tile_link" to={`/planning`}>
                    union of concerned scientists
              </Link>
            </li>

            <li className={`cc-tiles--tile ${getClipClassName()}`}>
                <Link className="cc-tiles--tile_link" to={`/planning`}>
                    trevor project
              </Link>
            </li>
        </ul>
      </Layout>
    </>
  )
}

export default Registry
