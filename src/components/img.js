import React from 'react'
import classnames from 'classnames'
import getBgClip from "../utils/get-clip-classname";

const Img = ({ src, alt, className }) => {
    const classes = classnames('cc-img', getBgClip(), className)
    return (
        <img
            src={src}
            alt={alt}
            className={classes}
        />
    )
}
export default Img