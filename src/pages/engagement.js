import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ConfettiBoard } from '../utils/triangle'

const SecondPage = () => {
  function init() {
    const styles = getComputedStyle(document.body)
    const colors = {
      magenta: {
        value: styles.getPropertyValue('--c-magenta'),
        fillRule: 'fill'
      },
      cyan: {
        value: styles.getPropertyValue('--c-cyan'),
        fillRule: 'fill'
      },
      gold: {
        value: styles.getPropertyValue('--c-gold'),
        fillRule: 'stroke'
      },
    }

    const rootElement = document.querySelector(".confetti_board")

    const triangleTemplate = document.getElementById('template-triangle')
      .contentDocument.getElementById('triangle-path')

    const confettiBoard = new ConfettiBoard({
      triangleTemplate,
      colors,
      ctx: rootElement,
    })

    confettiBoard.init()
    window.addEventListener('resize', () => { setTimeout(confettiBoard.reDraw.bind(confettiBoard, false), 500) })
  }

  useEffect(() => {
    window.addEventListener('load', init)
  })

  return (
    <Layout>
      <SEO title="Home" />
      <object id="template-triangle" aria-label="template svg" type="image/svg+xml" data="/img/triangle-fill.svg"></object>
      <h1 className="message">she said yes!</h1>
      <section className="confetti_container">
        <svg
          className="confetti_board"
          xmlns="http://www.w3.org/2000/svg"
        >Either your browser doesn't support canvas, or your JS is off</svg>
      </section>
    </Layout>

      
  )
}

export default SecondPage
