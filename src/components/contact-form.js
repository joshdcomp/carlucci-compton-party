import React, { useState, useRef } from 'react'
import axios from 'axios'
import classnames from 'classnames'

import sleep from '../utils/sleep'

const ContactForm = ({onSuccess=()=>{}, successMessage, greetingMessage}) => {
  const FormStates = {
    enabled: 'enabled',
    submitting: 'submitting',
    error: 'error',
    success: 'success'
  }
  const [ formState, setFormState ] = useState(FormStates.enabled)
  const [ errMessage, setErrMessage ] = useState()

  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)

    setFormState(FormStates.submitting)

    try {
      const res = await axios.post(
        '/',
        new URLSearchParams(formData).toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )

      console.log('form submitted', res)
      setFormState(FormStates.success)
      await sleep(3000, onSuccess)

    } catch (error) {
      console.log('form submit error', error)
      setFormState(FormStates.error)
      setErrMessage(error)
    }
  }

  const errorMessage = () => {
    return formState === FormStates.error
    ? (
        <div className="cc-bg-heinz cc-clip-3 cc-form--error">
          <p className="cc-text-body-10 cc-text-color-white">There was an error:</p>
          <pre><code>{JSON.stringify(errMessage, null, 2)}</code></pre>
        </div>
      )
    : null
  }

  const greeting = greetingMessage
    ? (
        <p className="cc-text-body-10 cc-text-color-white">
          {greetingMessage}
        </p>
      )
    : null

  const ack = successMessage
    ? (
        <p className="cc-text-body-10 cc-text-color-white">
          {successMessage}
        </p>
      )
    : null

  const wrapperClasses = classnames(
    "cc-form cc-grid-text_col cc-clip-2 cc-bg-raincloud",
    {'cc-form-is_loading': formState === FormStates.submitting}
  )

  if (formState === FormStates.success) {
    return (
      <div className={wrapperClasses}>
        <h2 className="cc-text-header-10 cc-text-color-white">Thanks!</h2>

        <p className="cc-text-body-10 cc-text-color-white">
          Cool! We'll let you know about anything else that comes up.
        </p>

        {ack}
      </div>
    )
  }

  return (
    <form
      name="cc-party-contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
      ref={formRef}
      disabled={formState !== FormStates.submitting}
      className={wrapperClasses}
    >
      <fieldset className="cc-form--fieldset">
        <legend className="cc-text-header-10 cc-text-color-white">Stay in touch</legend>

        {greeting}

        {errorMessage()}

        <div className="cc-grid-2_up">
          <label className="cc-form--input_group cc-grid--item">
            <span className="cc-form--input_group_label cc-text-color-white">Name:</span>

            <input
              type="text"
              name="name"
              required
              className="cc-form--input_group_control"
              disabled={formState === FormStates.submitting}
            />
          </label>

          <label className="cc-form--input_group cc-grid--item">
            <span className="cc-form--input_group_label cc-text-color-white">Email:</span>

            <input
              type="email"
              name="email"
              required
              className="cc-form--input_group_control"
              disabled={formState === FormStates.submitting}
            />
          </label>
        </div>
      </fieldset>

      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <button
        type="submit"
        className="cc-form--button cc-clip cc-clip-2 cc-bg-sol_lewet"
        disabled={[FormStates.submitting, FormStates.success].includes(formState)}
      >Send</button>
    </form>
  )
}

export default ContactForm
