// IMPORTS // ______________________________________________________________

import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// styles imports
import {
  InputWrapper,
  InputLabel,
  InputStyle,
} from '../styles/components/input'

// JSX // _________________________________________________________________

/**
 * Function capitalizeFirstLetter to capitalize label's first letter
 * @function
 * @name capitalizeFirstLetter
 * @param {string} string 
 * @returns {string}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Input component to display input buttons
 * @name Input
 * @param {string} forAndId
 * @param {string} inputType
 * @param {string} direction
 * @param {string} value
 * @param {string} onChange
 * @returns {?JSX}
 */

export default function Input ({ forAndId, inputType, direction, value, onChange }) {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <InputWrapper direction={direction}>
      <InputLabel theme={theme} htmlFor={forAndId}>
        {capitalizeFirstLetter(forAndId)}
      </InputLabel>
      <InputStyle
        theme={theme}
        type={inputType}
        id={forAndId}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

// PROPTYPES // ___________________________________________________________

Input.propTypes = {
  forAndId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func 
}

InputLabel.propTypes = {
  theme: PropTypes.string.isRequired
}


// EXPORT // ______________________________________________________________

