import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PersonAdd, PersonRemove } from './icons'

const InputString = ({ label, fieldName, renderAllFields, optional=false, multiple=0, onSelect=() => {}}) => {
  const initialState = renderAllFields
    ? Array.from({length: multiple}, () => '')
    : []
  const [ fields, setFields ] = useState(initialState)

  const handleChange = (e) => {
    onSelect(e.target.value)
  }

  return (
    <>
      <label
        className="cc-form--input_group"
      >
        <span className="cc-form--input_group_label">{label}</span>

        <span className='cc-form--input_flex'>
          <input
            type="text"
            name={fieldName}
            required={!optional}
            className="cc-form--input_group_control cc-form--input_group_control"
            onChange={handleChange}
          />
          {multiple
            ? (
              <button
                onClick={() => {
                  if (fields.length < multiple) {
                    const newFields = [...fields]
                    newFields.push('')
                    setFields(newFields)
                  }
                }}
                type="button"
                disabled={fields.length >= multiple}
                className='cc-form--helper_button'
                key={`${fieldName}-add`}
              >
                <PersonAdd />
              </button>
            )
            : null
          }
        </span>
      </label>
      {
        fields.length > 0
          ? fields.map((val, i) => {
            return (
              <span
                key={`${fieldName}-${i + 1}`}
                className='cc-form--input_flex cc-form--input_group_compact'
              >
                <input
                  type="text"
                  name={`${fieldName}-${i + 1}`}
                  value={val}
                  onChange={(e) => {
                    const newFields = [...fields]
                    newFields[i] = e.target.value
                    setFields(newFields)
                  }}
                  required
                  className="cc-form--input_group_control"
                />
                <button
                  onClick={() => {
                    const newFields = [...fields]
                    newFields.splice(i, 1)
                    setFields(newFields)
                  }}
                  type="button"
                  disabled={fields.length < 1}
                  className='cc-form--helper_button cc-form--helper_button_sub'
                  key={`${fieldName}-minus`}
                >
                  <PersonRemove />
                </button>
              </span>
            )
          })
          : null
      }
    </>
  )
}

const InputTextArea = ({ label, fieldName, optional=false, onSelect=() => {} }) => {
  const handleChange = (e) => {
    onSelect(e.target.value)
  }

  return (
    <label
      className="cc-form--input_group"
    >
      <span className="cc-form--input_group_label">{label}</span>

      <textarea
        name={fieldName}
        required={!optional}
        className="cc-form--input_group_control"
        onChange={handleChange}
      ></textarea>
    </label>
  )
}
const InputPhone = ({ label, fieldName, optional=false, onSelect=() => {} }) => {
  const handleChange = (e) => {
    onSelect(e.target.value)
  }

  return (
    <label
      className="cc-form--input_group"
    >
      <span className="cc-form--input_group_label">{label}</span>

      <input
        type="tel"
        name={fieldName}
        required={!optional}
        className="cc-form--input_group_control"
        onChange={handleChange}
      />
    </label>
  )
}

const InputEmail = ({ label, fieldName, optional=false, onSelect=() => {} }) => {
  const handleChange = (e) => {
    onSelect(e.target.value)
  }

  return (
  <label
      className="cc-form--input_group"
    >
      <span className="cc-form--input_group_label">{label}</span>

      <input
        type="email"
        name={fieldName}
        required={!optional}
        className="cc-form--input_group_control"
        onChange={handleChange}
      />
    </label>
  )
}

const InputToggle = ({ label, fieldName, optional=false, onSelect=() => {} }) => {
  const handleChange = (e) => {
    onSelect(e.target.value)
  }

  return (
    <label
      className="cc-form--input_group"
    >
      <span className="cc-form--input_group_label">{label}</span>

      <input
        type="checkbox"
        name={fieldName}
        required={!optional}
        className="cc-form--input_group_control"
        onChange={handleChange}
      />
    </label>
  )
}

const InputRadio = ({ label, fieldName, optional=false, options, colorType, onSelect=() => {} }) => {
  const handleChange = (e) => {
    onSelect(e.target.value)
  }

  const listWrapperClasses = classNames(
    'cc-info_list cc-form--input_layout',
    {
      'cc-form--input_color-sol_lewet': colorType === RadioTypes.solLewet,
      'cc-form--input_color-coral': colorType === RadioTypes.coral,
      'cc-form--input_color-mintfoam': colorType === RadioTypes.mintFoam,
      'cc-form--input_color-majorelle': colorType === RadioTypes.majorelle,
    }
  )

  return (
    <div
      className="cc-form--input_group"
    >
      {label
        ? (
          <label
            className="cc-form--input_group_label cc-text-header-1"
            htmlFor={fieldName}
          >
            {label}
          </label>
        )
        : null
      }

      <ul className={listWrapperClasses}>
        {options.map(({label, value}, i) => {
          return (
            <li key={`${label}${i}`} className="cc-form--input_layout_item">
              <label className='cc-form--input cc-form--radio_card'>
                <input
                  type="radio"
                  name={fieldName}
                  required={!optional}
                  value={value}
                  className="cc-form--input_group_control cc-form--radio_card_input"
                  onChange={handleChange}
                />
                <span className='cc-form--input_label cc-text-body-10'>{label}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const InputDate = ({ label, fieldName, optional=false, onSelect=() => {} }) => {
  const handleChange = (e) => {
    onSelect(e)
  }

  return (
    <label
      className="cc-form--input_group"
    >
      <span className="cc-form--input_group_label">{label}</span>

      <input
        type="date"
        name={fieldName}
        required={!optional}
        className="cc-form--input_group_control"
        onChange={handleChange}
      />
    </label>
  )
}

export const FieldTypes = {
  string: 'string',
  textarea: 'textarea',
  phone: 'phone',
  email: 'email',
  toggle: 'toggle',
  radio: 'radio',
  date: 'date',
}

export const RadioTypes = {
  solLewet: 'sol_lewet',
  coral: 'coral',
  mintFoam: 'mintfoam',
  majorelle: 'majorelle'
}

const FieldTypeComponents = {
  [FieldTypes.string]: InputString,
  [FieldTypes.textarea]: InputTextArea,
  [FieldTypes.phone]: InputPhone,
  [FieldTypes.email]: InputEmail,
  [FieldTypes.toggle]: InputToggle,
  [FieldTypes.date]: InputDate,
  [FieldTypes.radio]: InputRadio,
}

const Input = ({type, ...props}) => {
  const El = FieldTypeComponents[type]

  return <El {...props} />
}

const FieldInput = ({group, fields=[], ...props}) => {
  return group
    ? (
      <ul className='cc-info_list cc-form--group_2_col'>
        {fields.map((props, i) => {
          return (
            <li
              className="cc-form--group_col"
              key={`${props.label}-${i}`}
            >
              <Input {...props} />
            </li>
          )
        })}
      </ul>
    )
    : <Input {...props} />
}

FieldInput.propTypes = {
  type: PropTypes.oneOf(Object.keys(FieldTypeComponents))
}

export default FieldInput
