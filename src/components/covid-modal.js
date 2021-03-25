import React, { useState } from 'react'

import dayjs from 'dayjs'

import Modal from './modal'
import ContactForm from './contact-form'

import useLocalStorage from '../utils/use-local-storage'
import useWeddingDate from '../utils/use-wedding-date'

const CovidModal = () => {
  const [ hasSeenMessage, setHasSeenMessage ] = useLocalStorage('has_seen_reschedule_message', false)
  const [ modalOpen, setModalOpen ] = useState(!hasSeenMessage)

  const { current, format } = useWeddingDate()

  const handleClose = (e) => {
    setHasSeenMessage(true)
    setModalOpen(false)
  }

  return (
    <Modal isOpen={modalOpen} onClose={handleClose}>
      <h1 className="cc-text-header-30">Wedding update</h1>

      <p className="cc-text-body-10">
        Hello family and friends! Unfortunately, the ongoing pandemic has forced us to
        move our wedding celebration.
      </p>

      <p className="cc-text-header-10 cc-util-margin-vert-2">
        New Date: {dayjs(current, format).format('MMMM D, YYYY')}
      </p>

      <p className="cc-text-body-10">
        While things are certainly improving, we want everyone to join us
        worry-free, and enjoy New York in all its glory!
      </p>

      <ContactForm
        onSuccess={handleClose}
        greetingMessage="Leave us your name &amp; email for updates!"
        successMessage="This popup will close in a few seconds (or just hit escape)."
      />
    </Modal>
  )
}
export default CovidModal
