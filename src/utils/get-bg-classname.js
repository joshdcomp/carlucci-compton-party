import colors from "./colors"
const _colors = colors.filter(c => ['neon', 'raincloud'].includes(c))
export default () => `cc-bg-${_colors[Math.floor(Math.random() * _colors.length)]}`