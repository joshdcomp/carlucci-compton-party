import { sampleSize } from "lodash"
const getBGSet = (n=1) => {
    const bgs = [
        'cc-bg-bazooka',
        'cc-bg-mintfoam',
        'cc-bg-majorelle',
        'cc-bg-coral',
        'cc-bg-heinz',
        'cc-bg-sol_lewit',
        'cc-bg-sol_lewet',
        'cc-bg-slate',
    ]
    return sampleSize(bgs, n)
}
export default getBGSet