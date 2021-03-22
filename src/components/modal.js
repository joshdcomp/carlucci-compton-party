import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

import { Close } from './icons'
import { ModalContext } from './layout'

const Modal = ({onClose=()=>{}, isOpen=false, children, ...props}) => {
  const modalPortal = useContext(ModalContext)

  const handleClose = (e) => {
    // broken out in anticipation of needing to take other actions in here
    onClose(e)
  }

  const wrapperClasses = classnames('cc-modal', {
    'cc-modal-is_open': isOpen
  })

  const modalContent = (
    <div className={wrapperClasses} {...props}>
      <section className="cc-modal--content">
        {children}
        <button
          className="cc-modal--close"
          onClick={handleClose}
        >
          <Close />
        </button>
      </section>
    </div>
  )

  return modalPortal
    ? ReactDOM.createPortal(modalContent, modalPortal)
    : null
}
export default Modal
