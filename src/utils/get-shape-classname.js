import colors from "./colors"
import lottery from "./weighted-lottery"

export default () => {
    const [
        bazooka,
        mintfoam,
        majorelle,
        coral,
        heinz,
        sol_lewit,
        ...accents
    ] = colors

    const weightedColors = [
        [ bazooka, 4],
        [ mintfoam, 4],
        [ majorelle, 3],
        [ coral, 2],
        [ heinz, 3],
        [ sol_lewit, 3],
        ...accents.map(c => [c, 1])
    ]
    return `cc-shapes-color-${lottery(weightedColors)}`
}