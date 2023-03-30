// IMPORTS // ______________________________________________________________

import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// styles imports
import {
  NotFoundMain,
  NotFoundContent,
  Subtitle,
  Text,
} from '../styles/pages/notFound'

// JSX // _________________________________________________________________

/**
 * NotFound component to display website's 404 page
 * @name NotFound
 * @returns {?JSX}
 */

const NotFound = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <NotFoundMain theme={theme}>
      <NotFoundContent theme={theme}>
        <h2 className="sr-only">Page Not Found</h2>
        <Subtitle theme={theme}>404</Subtitle>
        <Text theme={theme}>Not found</Text>
      </NotFoundContent>
    </NotFoundMain>
  )
}

// PROPTYPES // ___________________________________________________________

NotFoundMain.propTypes = {
  theme: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default NotFound