import { sampleSize } from "lodash"
import colors from './colors'
const _colors = colors.filter(c => !['neon', 'raincloud'].includes(c))
export default (n=1) => sampleSize(_colors.map(color => `cc-bg-${color}`), n)
