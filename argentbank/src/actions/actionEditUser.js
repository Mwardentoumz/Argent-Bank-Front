// IMPORTS // ______________________________________________________________

import { createAction } from '@reduxjs/toolkit'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions edit user
 * @reduxAction
 */

export const loadApiEditUser = createAction('load-edit-user')

export const loadApiEditUserSuccess = createAction(
  'edit-user-success',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiEditUserError = createAction(
  'edit-user-error',
  (error) => {
    return {
      payload: error,
    }
  }
)