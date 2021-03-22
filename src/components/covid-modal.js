import React, { useState, useRef } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

import Modal from './modal'

import useLocalStorage from '../utils/use-local-storage'
import useWeddingDate from '../utils/use-wedding-date'

const CovidModal = () => {
  const [ hasSeenMessage, setHasSeenMessage ] = useLocalStorage('has_seen_reschedule_message', false)
  const [ modalOpen, setModalOpen ] = useState(!hasSeenMessage)

  const { current, format } = useWeddingDate()

  const formRef = useRef()

  const handleClose = (e) => {
    console.log(hasSeenMessage)
    // setHasSeenMessage(true)
    setModalOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    console.log(formData)

    try {
      const res = await axios.post(
        '/',
        new URLSearchParams(formData).toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )

      console.log('form submitted', res)
    } catch (error) {
      console.log('form submit error', error)
    }
  }

  return (
    <Modal isOpen={modalOpen} onClose={handleClose}>
      <h1>Miss Rona!</h1>

      <p>It happened, Miss Rona has decided to extend her stay in New York <em>just</em> long enough that we'll need to postpone.</p>

      <p>And because everyone wants to put on an event in NYC at the same time, we've had to postpone til next year.</p>

      <p>Our new wedding date is: {dayjs(current, format).format('MMMM D, YYYY')}</p>

      <h2>Stay in touch</h2>

      <p>We shoulda done this originally, but if you leave your </p>

      <form
        name="cc-party-contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <fieldset>
          <label htmlFor="form__name">Name:</label>
          <input type="text" name="name" id="form__name" />
        </fieldset>

        <fieldset>
          <label htmlFor="form__email">Email:</label>
          <input type="email" name="email" id="form__email" />
        </fieldset>

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <button type="submit">Send</button>
      </form>
    </Modal>
  )
}
export default CovidModal
