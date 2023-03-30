// IMPORTS // ______________________________________________________________

import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// styles imports
import { InputButton } from '../styles/components/button'
import {
  AccountArticle,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountDescription,
  ButtonWrapper
} from '../styles/components/account'

// JSX // _________________________________________________________________

/**
 * Account component to display user account informations
 * @name Account
 * @param {string} tilte
 * @param {number} amount
 * @param {string} description
 * @returns {?JSX}
 */

export default function Account ({ title, amount, description }) {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <AccountArticle theme={theme}>
      <AccountContentWrapper>
        <AccountTitle theme={theme}>{title}</AccountTitle>
        <AccountAmount theme={theme}>$ {amount.toLocaleString('en')}</AccountAmount>
        <AccountDescription theme={theme}>{description}</AccountDescription>
      </AccountContentWrapper>
      <ButtonWrapper>
        <InputButton
          type="button"
          value="View transactions"
          width="100%"
        />
      </ButtonWrapper>
    </AccountArticle>
  )
}

// PROPTYPES // ___________________________________________________________

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

AccountArticle.propTypes = {
  theme: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

