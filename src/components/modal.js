import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

import { Close } from './icons'
import { ModalContext } from './layout'

const Modal = ({onClose=()=>{}, isOpen=false, children, onClick=()=>{}, ...props}) => {
  const modalPortal = useContext(ModalContext)

  const handleClose = (e) => {
    // broken out in anticipation of needing to take other actions in here
    onClose(e)
  }

  const handleClick = (e) => {
    if (!e.currentTarget.contains(e.target)) {
      onClose(e)
    }
    onClick(e)
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose(e)
      }
    }

    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  const wrapperClasses = classnames('cc-modal', {
    'cc-modal-is_open': isOpen
  })

  const modalContent = (
    <div className={wrapperClasses} onClick={handleClick} {...props}>
      <section className="cc-modal--content">
        <button
          className="cc-modal--close"
          onClick={handleClose}
        >
          <Close />
        </button>

        {children}
      </section>
    </div>
  )

  return modalPortal
    ? ReactDOM.createPortal(modalContent, modalPortal)
    : null
}
export default Modal
