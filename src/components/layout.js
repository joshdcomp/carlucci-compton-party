import React, { createContext, useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "../styles/main.scss"

import CovidBanner from "./covid-banner"
import Nav from "./nav"
import ClippingPaths from "./clipping-paths"
import ShapeCanvas from "./shape-canvas";

import getBGSet from "../utils/get-bg-set"

export const BgContext = createContext({ nav: '', tiles: [], shuffle: () => { } })

const Layout = ({ children, contentPage }) => {
  const bgAssign = (set) => ({ nav: set.shift(), tiles: set })

  const [ bgs ] = useState(bgAssign(getBGSet(4)))

  const [ reRender, doRerender ] = useState({ hash: Math.random() })

  const [ mainEl, setMainEl ] = useState(false)

  const shuffle = () => { doRerender({ hash: Math.random() }) }

  const layoutRef = useCallback(node => {
    setMainEl(node)
  }, [])

  useEffect(() => {
    const interval = setInterval(shuffle, 1500)
    return () => { clearInterval(interval)}
  })

  useEffect(() => {
    const handleTab = (e) => {
      if (e.keyCode === 9) {
        document.body.classList.add('cc-layout-is_keyboarding')
      }
      
      if (e.keyCode === 27) {
        document.body.classList.remove('cc-layout-is_keyboarding')
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => {
      document.removeEventListener('keydown', handleTab)
    }
  })

  const wrapperClasses = classnames(
    'cc-layout',
    { 
      'cc-layout-content_page': contentPage,
    }
  )

  return (
    <BgContext.Provider value={{ shuffle, ...bgs }}>
      <ClippingPaths />
      <CovidBanner />
      <div className={wrapperClasses}>
        <div className="cc-layout--inner">
          <Nav />

          <main className="cc-layout--main" ref={layoutRef}>
            {children}
          </main>

          <ShapeCanvas layoutRef={mainEl} reRender={reRender} />
        </div>
      </div>
    </BgContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
