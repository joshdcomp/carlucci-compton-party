const svgNS = "http://www.w3.org/2000/svg"

class Triangle {
    constructor({ triangleTemplate, coords: {x=0, y=0}={}, color }) {
        this.position = {x, y}
        this.triangleTemplate = triangleTemplate
        this.color = color
        this.el = document.createElementNS(svgNS, 'path')
        this.initialRotate = Math.floor( Math.random() * 360 )
        this.currentRotate = 15
    }

    setTransform(deg) {
        return `translate(${this.position.x}, ${this.position.y}) scale(0.45) rotate(${deg})`
    }

    rotate() {
        this.currentRotate = this.currentRotate * -1
        const deg = this.initialRotate + this.currentRotate
        
        this.el.setAttribute( 'transform', this.setTransform(deg) )
        return this.el
    }

    reDraw({coords, color}) {
        this.position = coords
        this.color = color
        this.render()
    }

    render() {
        clearInterval(this.flicker)
        const d =  this.triangleTemplate.getAttribute('d')
        const el = this.el

        el.setAttribute('d', d)
        el.setAttribute('transform', this.setTransform(this.initialRotate))
        el.setAttribute('transform-origin', '10px 15px')
        el.setAttribute('style', `${this.color.fillRule}: ${this.color.value}; stroke-width: 4;`)

        this.el = el

        this.flicker = setInterval(function() {this.rotate()}.bind(this), 200)
        return this.el
    }

    destroy() {
        clearInterval(this.flicker)
        this.el.remove()
    }
}

class ConfettiBoard {
    constructor({ triangleTemplate, ctx, colors}) {
        this.triangleTemplate = triangleTemplate
        this.ctx = ctx 
        this.colors = colors
        this.triangleMax = this.calcMaxTriangles()
        this.triangles = []
        this.setMessageBox()
    }

    calcMaxTriangles() {
        // calculate the number of triangles to show based on desired density
        const artboard = this.ctx.getBoundingClientRect()
        const width = artboard.width
        const height = artboard.height
        const big = Math.max(width, height)
        const small = Math.min(width, height)
        return Math.floor(100 * (big / small))
    }

    generateCoords() {
        const artboard = this.ctx.getBoundingClientRect()
        let x, y
        function between(num, min, max) {
            return num >= min && num <= max
        }
        function genX() {
            return Math.floor( ( Math.random() * Math.floor( artboard.width - 40 ) ) + 4 )
        }
        function genY() {
            return Math.floor( ( Math.random() * Math.floor( artboard.height - 45 ) ) + 4 )
        }

        x = genX()
        y = genY()

        let i = 0
        while(
            between(x, this.messageCoords.left, this.messageCoords.right)
            && between(y, this.messageCoords.top, this.messageCoords.bottom)
            && i < 21
        ) {
            if (between(x, this.messageCoords.left, this.messageCoords.right)) {
                x = genX()
            }
            else {
                y = genY()
            }
            i++
        }
        
        return { x, y }
    }

    generateColor() {
        const colorKeys = Object.keys(this.colors)
        const colorI = Math.floor( Math.random() * colorKeys.length )
        return this.colors[ colorKeys[ colorI ] ]
    }

    generateTriangles() {
        const { triangleTemplate, triangleMax, triangles } = this
        const diff = triangleMax - triangles.length
        for (let i = 0; i < diff + 1; i++) {
            const coords = this.generateCoords()
            const color = this.generateColor() 

            this.triangles.push(new Triangle({ triangleTemplate, coords, color }))
        }
    }

    setMessageBox() {
        let message = document.querySelector('.message')
        const { top, right, bottom, left } = message.getBoundingClientRect()

        this.messageCoords = {
            top: Math.ceil(top),
            right: Math.ceil(right),
            bottom: Math.ceil(bottom),
            left: Math.ceil(left),
        }
    }
    
    reDraw() {
        this.setMessageBox()

        const oldMax = this.triangleMax
        const newMax = this.calcMaxTriangles()

        if (newMax === oldMax) return

        if (newMax < oldMax) {
            // de-init triangles, remove from dom
            this.triangles.slice(newMax - 1).forEach((triangle) => {
                triangle.destroy()
            })

            // remove instances from triangle manifest
            this.triangles.length = newMax
            this.triangleMax = newMax
        }
        else {
            this.triangleMax = newMax
            this.generateTriangles()
        }

        this.triangles.forEach((triangle) => {
            if (triangle.el.parentNode === this.ctx) {
                triangle.reDraw({
                    coords: this.generateCoords(),
                    color: this.generateColor()
                })
            }
            else {
                this.ctx.appendChild(triangle.render())
            }
        })
    }

    init() {
        this.generateTriangles()

        this.triangles.forEach((triangle) => {
            this.ctx.appendChild(triangle.render())
        })
    }
}

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
    window.addEventListener('resize', () => {setTimeout(confettiBoard.reDraw.bind(confettiBoard, false), 500)})
}

window.addEventListener('load', init)
