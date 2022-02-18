import React, { useState, useRef } from 'react'
import axios from 'axios'
import classnames from 'classnames'

import FieldInput, { FieldTypes, RadioTypes } from './field-input'

export const AttendingTypes = {
  not_answered: 'not_answered',
  attending: 'attending',
  not_attending: 'not_attending'
}

const RsvpForm = ({onSuccess=()=>{}, successMessage, greetingMessage}) => {
  const FormStates = {
    enabled: 'enabled',
    submitting: 'submitting',
    error: 'error',
    success: 'success'
  }

  const [ formState, setFormState ] = useState(FormStates.enabled)
  const [ errMessage, setErrMessage ] = useState()
  const [ attendingType, setAttendingType ] = useState(AttendingTypes.not_answered)

  const getSuccessMessage = () => {
    return FormConfig[FormStates[formState]][attendingType]
  }

  const formRef = useRef()

  const AttendingFieldset = {
    title: `Will you join us?`,
    fields: [{
      fieldName: `rsvp_attending`,
      // label: `So...are you comin?`,
      type: FieldTypes.radio,
      colorType: RadioTypes.solLewet,
      onSelect: setAttendingType,
      options: [
        {
          label: `Absolutely!`,
          value: AttendingTypes.attending,
        },
        {
          label: `Sadly no :(`,
          value: AttendingTypes.not_attending,
        }
      ]
    }],
  }

  const ContactFieldset = {
    title: (attendingType === AttendingTypes.attending) ? `Great! Who's coming?` : `Aww ok, who are we crossing off?`,
    displayWhen: [
      AttendingTypes.attending,
      AttendingTypes.not_attending
    ].includes(attendingType),
    fields: [
      {
        fieldName: `primary_contact_name`,
        label: (attendingType === AttendingTypes.attending) ? `Primary Contact` : `Name`,
        type: FieldTypes.string,
      },
      {
        fieldName: `primary_contact_phone`,
        label: `Phone`,
        displayWhen: attendingType === AttendingTypes.attending,
        type: FieldTypes.phone,
      },
      {
        fieldName: `primary_contact_email`,
        label: `Email`,
        displayWhen: attendingType === AttendingTypes.attending,
        type: FieldTypes.email,
      },
      {
        fieldName: `contact_guests`,
        label: `Additional guests`,
        displayWhen: attendingType === AttendingTypes.attending,
        type: FieldTypes.string,
        multiple: 4,
        optional: true,
      },
      {
        fieldName: `contact_vaxed`,
        label: `Is everyone in your group vaccinated & boosted for COVID-19?`,
        displayWhen: attendingType === AttendingTypes.attending,
        type: FieldTypes.radio,
        colorType: RadioTypes.coral,
        options: [
          {
            label: `Yes`,
            value: 'yes',
          },
          {
            label: `No`,
            value: 'no',
          }
        ]
      },
    ]
  }

  const WeddingDayFieldset = {
    title: `Party profile`,
    displayWhen: attendingType === AttendingTypes.attending,
    fields: [
      {
        fieldName: `party_profile_diet`,
        label: `Any dietary needs we should know?`,
        type: FieldTypes.textarea,
        optional: true,
      },
      {
        fieldName: `party_profile_afterparty`,
        label: (<>
          Are you coming to <a href="/schedule#after-party" target="_blank">the afterparty</a>?
        </>),
        type: FieldTypes.radio,
        colorType: RadioTypes.mintFoam,
        options: [
          {
            label: `Yes`,
            value: 'yes',
          },
          {
            label: `No`,
            value: 'no',
          }
        ],
        optional: true,
      },
      {
        fieldName: `party_profile_brunch`,
        label: (<>
          Will you join us for <a href="/schedule#day-after" target="_blank">brunch on Sunday</a>?
        </>),
        type: FieldTypes.radio,
        colorType: RadioTypes.solLewet,
        options: [
          {
            label: `Yes`,
            value: 'yes',
          },
          {
            label: `No`,
            value: 'no',
          }
        ],
        optional: true,
      },
    ]
  }

  const AdviceFieldset = {
    title: `Any advice?`,
    displayWhen: [
      AttendingTypes.attending,
      AttendingTypes.not_attending
    ].includes(attendingType),
    fields: [
      {
        fieldName: `marriage_advice`,
        label: `We want our marriage to last a lifetime! How do we get there?`,
        type: FieldTypes.textarea,
        optional: true,
      }
    ]
  }

  const FormConfig = {
    [FormStates.enabled]: {
      fieldsets: [
        AttendingFieldset,
        ContactFieldset,
        WeddingDayFieldset,
        AdviceFieldset,
      ],
    },
    [FormStates.success]: {
      [AttendingTypes.attending]: {
        title: `Thanks!`,
        body: `Cool! We'll be in touch.`
      },
      [AttendingTypes.not_attending]: {
        title: `Thanks!`,
        body: `We're sad we won't get to see you, but we understand.`
      }
    },
    [FormStates.error]: {
      title: `There was an error:`
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    setFormState(FormStates.submitting)

    console.log(Object.fromEntries(formData))
    try {
      const res = await axios.post(
        '/',
        new URLSearchParams(formData).toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )

      console.log('form submitted', res)
      setFormState(FormStates.success)
      onSuccess({ attendingType })

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
          <p className="cc-text-body-10">{FormConfig[FormStates.error].title}</p>
          <pre><code className=" ">{JSON.stringify(errMessage, null, 2)}</code></pre>
        </div>
      )
    : null
  }

  const greeting = greetingMessage
    ? (
        <p className="cc-text-body-10">
          {greetingMessage}
        </p>
      )
    : null

  const ack = successMessage
    ? (
        <p className="cc-text-body-10">
          {successMessage}
        </p>
      )
    : null

  const wrapperClasses = classnames(
    "cc-form cc-form-full_page",
    {'cc-form-is_loading': formState === FormStates.submitting}
  )

  if (formState === FormStates.success) {
    const successMessage = getSuccessMessage()
    return (
      <div className={wrapperClasses}>
        <h2 className="cc-text-header-10">
          {successMessage.title}
        </h2>

        <p className="cc-text-body-10">
          {successMessage.body}
        </p>

        {ack}
      </div>
    )
  }

  const isPipeline = typeof window === 'undefined'

  const renderFields = (renderAllFields) => {
    return FormConfig[FormStates.enabled].fieldsets.map(({ title, fields, displayWhen }, i) => {
      let doShow = (typeof displayWhen === 'boolean')
        ? displayWhen
        : true

      return renderAllFields || doShow
        ? (
            <fieldset
              disabled={formState === FormStates.submitting}
              className='cc-form--fieldset'
              key={`${title}${i}`}
            >
              <legend className="cc-text-header-10 cc-form--legend">
                {title}
              </legend>

              {fields.map(({ displayWhen, ...props}, i) => {
                const doShow = (typeof displayWhen === 'boolean')
                  ? displayWhen
                  : true

                return renderAllFields || doShow
                  ? <FieldInput key={`${props.label || props.keySeed}${i}`} renderAllFields={renderAllFields} {...props} />
                  : null
              })}
            </fieldset>
          )
        : null
    })
  }

  return (
    <form
      name="cc-party-rsvp"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
      ref={formRef}
      disabled={formState !== FormStates.submitting}
      className={wrapperClasses}
    >
      {
        FormConfig[FormStates.enabled].title
          ? (
            <h2 className="cc-text-header-10">
              {FormConfig[FormStates.enabled].title}
            </h2>
          )
          : null
      }

      {greeting}
      {errorMessage()}

      {renderFields(isPipeline)}

      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="cc-party-rsvp" />
      {
        [AttendingTypes.attending, AttendingTypes.not_attending].includes(attendingType)
          ? (
            <button
              type="submit"
              className="cc-form--button cc-bg-coral"
              disabled={[FormStates.submitting, FormStates.success].includes(formState)}
            >Send!</button>
          )
          : null
      }
    </form>
  )
}

export default RsvpForm
