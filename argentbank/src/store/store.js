// IMPORTS // ______________________________________________________________

import { configureStore } from '@reduxjs/toolkit'
// reducers imports
import { userReducer } from '../reducers/userReducer'
import { tokenReducer } from '../reducers/tokenReducer'
import { themeReducer } from '../reducers/themeReducer'

// STORE // ______________________________________________________________

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    getUser: userReducer,
    theme: themeReducer,
  },
})