// IMPORTS // ______________________________________________________________

import { createAction } from '@reduxjs/toolkit'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get user
 * @reduxAction
 */

export const loadApiUser = createAction('load-get-user')

export const loadApiUserSuccess = createAction(
  'get-user-success',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiUserError = createAction(
  'get-user-error', (error) => {
  return {
    payload: error,
  }
})