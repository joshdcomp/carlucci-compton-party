import React, { useState } from 'react'
import { CopyYes, CopyDo } from './icons'
import classnames from 'classnames'

const CopyTooltip = ({children, copyText}) => {
    const [ isCopied, setIsCopied ] = useState(false)
    const [ isShow, setIsShow ] = useState(false)

    const wrapperClasses = classnames(
        'cc-copy_tooltip',
        { 'cc-copy_tooltip-is_shown': isShow }
    )

    const doCopy = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(copyText)
            .then(
                () => {
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 1500)
                },
                (e) => {
                    console.log('There was a problem copying the text', e)
                }
            )
    }
    return (
        <span
            className={wrapperClasses}
            onClick={doCopy}
            
            onMouseEnter={() => setIsShow(true)}
            onFocus={() => setIsShow(true)}

            onMouseLeave={() => setIsShow(false)}
            onBlur={() => setIsShow(false)}
            onKeyPress={doCopy}
            role="button"
            tabIndex="0"
        >
            {children}
            <span className="cc-copy_tooltip--tooltip">
                <span className="cc-copy_tooltip--tooltip_icon">{isCopied
                    ? (<CopyYes />)
                    : (<CopyDo />)
                }</span>
                {isCopied
                    ? 'Copied!'
                    : 'Copy'
                }
            </span>
        </span>
    )
}
export default CopyTooltip