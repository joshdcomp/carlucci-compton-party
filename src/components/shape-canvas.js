import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'

import getCompositeClassname from "../utils/get-composite-classname"
import getShapeClassName from "../utils/get-shape-classname"
import weightedLottery from "../utils/weighted-lottery"
import rand from "../utils/rand.js"

import * as rawShapes from "../components/shapes"

const { Composites, ...Shapes } = rawShapes

const ShapeCanvas = ({layoutRef}) => {
    // all values are evaluated clockwise starting top left for matrix and top for cardinal directions
    // offset values are relative to top and left
    const cornerShapes = rand(6, 8)
    const middleShapes = rand(1, 3)
    const outBuff = 24
    const inBuff = outBuff/2

    const cornerBuffers = [outBuff, inBuff, inBuff, outBuff]
    const middleBuffers = [outBuff, inBuff, 0, inBuff]
    
    const minsY = [0, 0, 0, 1, 2, 2, 2, 1]
    const minsX = [0, 1, 2, 2, 2, 1, 0, 0]

    const sizePresets = [
        [
            {
                px: 60,
                className: 'cc-shapes--shape-size-10'
            },
            5
        ],
        [
            {
                px: 100,
                className: 'cc-shapes--shape-size-20'
            },
            10
        ],
        [
            {
                px: 160,
                className: 'cc-shapes--shape-size-30'
            },
            8
        ],
        [
            {
                px: 210,
                className: 'cc-shapes--shape-size-40'
            },
            4
        ],
    ]

    // lol this is insanity
    const shapeWeight = 2
    const compositeWeight = 1
    const weightedShapes = _.reduce(
        Shapes,
        (acc, Component, displayName) => {
            acc.push([ {displayName, Component}, shapeWeight ])
            return acc
        }, 
        []
    ).concat(_.reduce(
        Composites,
        (acc, Component, displayName) => {
            acc.push([ {displayName, Component}, compositeWeight ])
            return acc
        },
        []
    ))
    const getClassnameFor = {
        shape: getShapeClassName,
        composite: getCompositeClassname
    }

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
            const shapeSize = weightedLottery(sizePresets)

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
                        yMin = layoutMainRect.top - shapeSize.px
                        yMax = layoutMainRect.top + layoutMainPadding - shapeSize.px - 30
                        
                        xMin = isLeft
                            // top left
                            ? layoutMainRect.left - layoutMainPadding
                            // top right
                            : layoutMainRect.right - layoutMainPadding + shapeSize.px
                        
                        xMax = isLeft
                            // top left
                            ? layoutMainRect.left + layoutMainPadding - shapeSize.px
                            // top right
                            : layoutMainRect.right + layoutMainPadding + shapeSize.px
                        
                    // bottom
                    } else {
                        yMin = layoutMainRect.bottom - layoutMainPadding
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
                            yMin = layoutMainRect.top - 130
                            yMax = layoutMainRect.top - shapeSize.px - 30

                            xMin = x.min
                            xMax = x.max
                            break

                        case middleBuffers[directions.right]:
                            yMin = y.min
                            yMax = y.max

                            xMin = layoutMainRect.right - layoutMainPadding + 20
                            xMax = layoutMainRect.right + layoutMainPadding
                            break

                        case middleBuffers[directions.bottom]:
                            yMin = layoutMainRect.bottom - layoutMainPadding
                            yMax = layoutMainRect.bottom + layoutMainPadding - shapeSize.px + 20

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
                console.log({yMin, yMax, layoutMainRect, isCorner})
                pos['top'] = rand(yMin, yMax)
                pos['left'] = rand(xMin, xMax)

            } else {
                pos['top'] = rand(y.min, y.max) - buffY[0] - 10
                pos['left'] = rand(x.min, x.max) - buffX[0] - 10
            }

            const { displayName, Component } = weightedLottery(weightedShapes)

            const shapeClassname = displayName.includes('Composite')
                ? getClassnameFor.composite()
                : getClassnameFor.shape()
            
            const classes = classnames(
                'cc-shapes--shape',
                displayName,
                shapeClassname,
                shapeSize.className,
                { 
                    'cc-shapes--shape-above_main': isAbove && layoutMain,
                    'isCorner' : isCorner,
                }
            )
            
            return (
                <span
                    className={classes}
                    style={{...pos,}}
                    key={`shape-${i}-${j}`}
                ><Component /></span>
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