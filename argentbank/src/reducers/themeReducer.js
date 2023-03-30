// IMPORTS // ______________________________________________________________

import { toggleTheme } from "../actions/actionTheme";
import { createReducer } from "@reduxjs/toolkit";

// REDUCER // ______________________________________________________________

export const themeReducer = createReducer('light', (builder) => {
  return builder
    .addCase(toggleTheme, (state) => {
      return state === 'light' ? 'dark' : 'light'
    })
})