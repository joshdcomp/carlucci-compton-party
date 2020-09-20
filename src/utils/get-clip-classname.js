const getClipClassName = () => {
    const clips = ['cc-clip-1', 'cc-clip-2', 'cc-clip-3', 'cc-clip-4']
    const key = Math.floor(Math.random() * clips.length)
    return `cc-clip ${clips[key]}`
}

export default getClipClassName