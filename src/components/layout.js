/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { createContext, useState, useCallback } from "react"
import PropTypes from "prop-types"

import "../styles/main.scss"

import Nav from "./nav"
import ClippingPaths from "./clipping-paths"
import ShapeCanvas from "./shape-canvas";

import getBGSet from "../utils/get-bg-set"

export const BgContext = createContext({ nav: '', tiles: [], shuffle: () => { } })

const Layout = ({ children }) => {
  const stateVal = (set) => ({ nav: set.shift(), tiles: set })

  const [bgs, setBgs] = useState(stateVal(getBGSet(4)))

  const [mainEl, setMainEl] = useState(false)

  const shuffle = () => setBgs(stateVal(getBGSet(4)))

  const layoutRef = useCallback(node => {
    setMainEl(node)
  })

  return (
    <BgContext.Provider value={{ shuffle, ...bgs }}>
      <ClippingPaths />
      <div className="cc-layout">
        <div className="cc-layout--inner">
          <Nav />

          <main className="cc-layout--main" ref={layoutRef}>
            {children}
          </main>

          <ShapeCanvas layoutRef={mainEl} />
        </div>
      </div>
    </BgContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
