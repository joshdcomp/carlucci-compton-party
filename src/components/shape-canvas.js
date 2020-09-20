import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'

import getBgClassname from "../utils/get-bg-classname"
import weightedLottery from "../utils/weighted-lottery"
import rand from "../utils/rand.js"



const ShapeCanvas = ({layoutRef}) => {
    // all values are evaluated clockwise starting top left for matrix and top for cardinal directions
    // offset values are relative to top and left
    const cornerShapes = 10
    const middleShapes = 5
    const outBuff = 24
    const inBuff = outBuff/2

    const cornerBuffers = [outBuff, inBuff, inBuff, outBuff]
    const middleBuffers = [outBuff, inBuff, 0, inBuff]
    
    const minsY = [0, 0, 0, 1, 2, 2, 2, 1]
    const minsX = [0, 1, 2, 2, 2, 1, 0, 0]

    const sizePresets = [
        {
            px: 10,
            className: 'cc-shapes--shape-size-10'
        },
        {
            px: 30,
            className: 'cc-shapes--shape-size-20'
        },
        {
            px: 60,
            className: 'cc-shapes--shape-size-30'
        },
        {
            px: 100,
            className: 'cc-shapes--shape-size-40'
        },
    ]

    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const cellHeight = Math.floor(viewport.height/3)
    const cellWidth = Math.floor(viewport.width/3)

    const layoutMain = document.querySelector('.cc-layout--main')

    const layoutMainRect = layoutRef && layoutRef.getBoundingClientRect()
    const layoutMainPadding = layoutRef && window.getComputedStyle(layoutRef).getPropertyPriority('padding')

    const shapes = [...Array(8).keys()].reduce((acc, __, i) => {
        const isCorner  = i%2 === 0
        const cellShapeCount = isCorner ? middleShapes : cornerShapes
        const currentBuffset = isCorner ? cornerBuffers : middleBuffers
        
        const currentMinModY = minsY[i]
        const currentMinModX = minsX[i]

        const cellMinPosY = cellHeight * currentMinModY
        const cellMinPosX = cellWidth * currentMinModX

        // [top, bottom]
        // [left, right]
        const buffY = [currentBuffset[0], currentBuffset[2]]
        const buffX = [currentBuffset[3], currentBuffset[1]]

        const y = {
            min: cellMinPosY,
            max: buffY[0] + buffY[1] + cellMinPosY + cellHeight,
        }

        const x = {
            min: cellMinPosX,
            max: buffX[0] + buffX[1] + cellMinPosX + cellWidth,
        }

        const cellShapes = [...Array(cellShapeCount).keys()].map((__, j) => {
            const shapeSize = _.sample(sizePresets)

            // 3:1 against a given item appearing above the main content
            const isAbove = weightedLottery([ [false, 3], [true, 1] ])

            let yMin = 0
            let yMax = 0
            let xMin = 0
            let xMax = 0

            const pos = {}

            if (isAbove && layoutRef) {
                if (isCorner) {
                    const isTop = buffY[0] > buffY[1]
                    const isLeft = (buffX[0] > buffX[1])

                    if (isTop) {
                        yMin = layoutMainRect.top
                        yMax = layoutMainRect.top + layoutMainPadding - shapeSize.px - 15
                        
                        xMin = isLeft
                            // top left
                            ? layoutMainRect.left - layoutMainPadding + shapeSize.px
                            // top right
                            : layoutMainRect.right - layoutMainPadding + shapeSize.px
                        
                        xMax = isLeft
                            // top left
                            ? layoutMainRect.left + layoutMainPadding - shapeSize.px
                            // top right
                            : layoutMainRect.right + layoutMainPadding + shapeSize.px
                        
                    // bottom
                    } else {
                        yMin = layoutMainRect.bottom - layoutMainPadding + buffY[1]
                        yMax = layoutMainRect.bottom - 2 // just want to avoid tension from having something flush with the border

                        xMin = isLeft
                            // bottom left
                            ? layoutMainRect.left - layoutMainPadding
                            // bottom right
                            : x.min - buffX[0]

                        xMax = isLeft
                            // bottom left
                            ? layoutMainRect.left + layoutMainPadding - shapeSize.px
                            // bottom right
                            :  layoutMainRect.right - shapeSize.px
                    }
                } else {
                    const directions = {
                        top: 2, 
                        right: 3,
                        bottom: 0,
                        left: 1
                    }

                    switch (0) {
                        case middleBuffers[directions.top]:
                            yMin = layoutMainRect.top
                            yMax = layoutMainRect.top + layoutMainPadding - shapeSize.px - 15

                            xMin = x.min
                            xMax = x.max
                            break

                        case middleBuffers[directions.right]:
                            yMin = y.min
                            yMax = y.max

                            xMin = layoutMainRect.right - layoutMainPadding
                            xMax = layoutMainRect.right - shapeSize.px
                            break

                        case middleBuffers[directions.bottom]:
                            yMin = layoutMainRect.bottom - layoutMainPadding
                            yMax = layoutMainRect.bottom + layoutMainPadding - shapeSize.px

                            xMin = x.min
                            xMax = x.max
                            break

                        case middleBuffers[directions.left]:
                            yMin = y.min
                            yMax = y.max

                            xMin = layoutMainRect.left - shapeSize.px
                            xMax = layoutMainRect.left + layoutMainPadding - shapeSize.px
                            break
                    }
                }

                pos['top'] = rand(yMin, yMax)
                pos['left'] = rand(xMin, xMax)

            } else {
                pos['top'] = rand(y.min, y.max) - buffY[0]
                pos['left'] = rand(x.min, x.max) - buffX[0]
            }
            
            const classes = classnames(
                'cc-shapes--shape',
                getBgClassname(),
                shapeSize.className,
                { 'cc-shapes--shape-above_main': isAbove && layoutMain }
            )
            
            return (
                <span
                    className={classes}
                    style={{...pos,}}
                    key={`shape-${i}-${j}`}
                ></span>
            )
        })
        acc = acc.concat(cellShapes)

        // rotate relevant buffer configs
        if (isCorner) {
            cornerBuffers.push(cornerBuffers.shift())
        }
        else {
            middleBuffers.push(middleBuffers.shift())
        }

        return acc
    }, [])
    
    return (
        <figure className="cc-shapes">
            {shapes}
        </figure>
    )
}

export default ShapeCanvas