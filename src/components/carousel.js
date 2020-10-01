import React, { useState } from 'react'
import classnames from 'classnames'
import Img from './img'
import { ChevronLeft, ChevronRight } from './icons'

const Carousel = ({ slides }) => {
    const [ current, setCurrent ] = useState(0)
    const prev = (current - 1 > -1) 
        ? current - 1
        : slides.length - 1
    const next = (current + 1 === slides.length )
        ? 0
        : current + 1
    return (
        <div className="cc-carousel">
            <button 
                className="cc-carousel--button cc-carousel--button-left"
                onClick={() => setCurrent(prev)}
                aria-label={`Show ${slides[current].alt}`}
                >
                <ChevronLeft />
            </button>

            <button 
                className="cc-carousel--button cc-carousel--button-right"
                onClick={() => setCurrent(next)}
                aria-label={`Show ${slides[current].alt}`}
            >
                <ChevronRight />
            </button>

            <div className="cc-carousel--img_container">
                {slides.map(({src, alt}, i) => {
                    const classes = classnames(
                        'cc-carousel--img', 
                        { 'cc-carousel--img-is_current': i === current }
                    )
                    return (
                        <Img
                            src={src}
                            alt={alt}
                            className={classes}
                            key={`Img: ${alt}`}
                        />
                    )
                })}
            </div>
            <ul className="cc-carousel--nav">
                {slides.map(({alt}, i) => {
                    const wrapperClasses = classnames(
                        'cc-carousel--nav_item',
                        { 'cc-carousel--nav_item-is_current': i === current }
                    )
                    return (
                        <li className={wrapperClasses} key={alt}>
                            <button 
                                className="cc-carousel--nav_pip" 
                                onClick={() => setCurrent(i)}
                                aria-label={`Show ${alt}`}
                            ></button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Carousel