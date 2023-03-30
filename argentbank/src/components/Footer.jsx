// IMPORTS // ______________________________________________________________

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// actions imports
import { toggleTheme } from '../actions/actionTheme'
// styles imports
import { FooterStyle, Button, Copyright } from '../styles/components/footer'

// JSX // _________________________________________________________________

/**
 * Footer component to display website's footer
 * @name Footer
 * @returns {?JSX}
 */

export default function Footer() {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  return (
    <FooterStyle theme={theme}>
      <Copyright theme={theme}>Copyright 2020 Argent Bank</Copyright>
      <div onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? (
          <Button theme={theme}>Dark</Button>
        ) : (
          <Button theme={theme}>Light</Button>
        )}
      </div>
    </FooterStyle>
  )
}

// PROPTYPES // ___________________________________________________________

FooterStyle.propTypes = {
  theme: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

