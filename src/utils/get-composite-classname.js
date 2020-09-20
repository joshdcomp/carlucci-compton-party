import { sampleSize } from 'lodash'
import colors from "./colors"

export default () => {
    // sass list items are 1-base
    const sampledColors = sampleSize(colors, 2)

    return `cc-shapes-composite-${sampledColors[0]}-${sampledColors[1]}`
}
