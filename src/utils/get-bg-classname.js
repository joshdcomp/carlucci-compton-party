const getBGClassName = () => {
    const bgs = [
        'cc-bg-bazooka',
        'cc-bg-mintfoam',
        'cc-bg-majorelle',
        'cc-bg-coral',
        'cc-bg-heinz',
        'cc-bg-sol_lewit',
        'cc-bg-sol_lewet',
        'cc-bg-slate',
        'cc-bg-raincloud',
    ]
    const key = Math.floor(Math.random() * bgs.length)
    return `${bgs[key]}`
}
export default getBGClassName