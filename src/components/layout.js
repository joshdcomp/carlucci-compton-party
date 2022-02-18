import React, { createContext, useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "../styles/main.scss"

import CovidBanner from "./covid-banner"
import CovidModal from "./covid-modal"
import Nav from "./nav"
import ClippingPaths from "./clipping-paths"
import ShapeCanvas from "./shape-canvas";

import getBGSet from "../utils/get-bg-set"

export const BgContext = createContext({ nav: '', tiles: [], shuffle: () => { } })
export const DateContext = createContext({})
export const ModalContext = createContext({})

const Layout = ({ children, contentPage }) => {
  const bgAssign = (set) => ({ nav: set.shift(), tiles: set })
  const [ bgs ] = useState(bgAssign(getBGSet(6)))
  const [ reRender, doRerender ] = useState({ hash: Math.random() })

  // track the main element
  const [ mainEl, setMainEl ] = useState(false)
  const layoutRef = useCallback(node => {
    setMainEl(node)
  }, [])

  const shuffle = () => { doRerender({ hash: Math.random() }) }

  // set up a ref for portals
  const [ modalRootEl, setModalRootEl] = useState(false)
  const modalRef = useCallback( node => {
    setModalRootEl(node)
  }, [])

  // shuffle the svgs
  useEffect(() => {
    const interval = setInterval(shuffle, 2000)
    return () => { clearInterval(interval)}
  }, [])

  // set keyboard shortcuts for focus states
  useEffect(() => {
    const handleTab = (e) => {
      if (e.key === 9) {
        document.body.classList.add('cc-layout-is_keyboarding')
      }

      if (e.key === "Escape") {
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
    <DateContext.Provider value={{ old: '2021/05/08', current: '2022/05/07', format: 'YYYY/MM/DD' }}>
      <BgContext.Provider value={{ shuffle, ...bgs }}>
        <ModalContext.Provider value={modalRootEl}>
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
          <div ref={modalRef} />
        </ModalContext.Provider>
      </BgContext.Provider>
    </DateContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
