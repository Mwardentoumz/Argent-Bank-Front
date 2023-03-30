import axios from "axios"
import { loadApiEditUser, loadApiEditUserError, loadApiEditUserSuccess } from "../actions/actionEditUser"
import { loadApiToken, loadApiTokenError, loadApiTokenSuccess } from "../actions/actionGetToken"
import { loadApiUser, loadApiUserError, loadApiUserSuccess } from "../actions/actionGetUser"

// CONSTANTS // __________________________________________________________________

const baseURL = 'http://localhost:3001/api/v1/user/'

// API CALLS // __________________________________________________________________

/**
 * to get user token with POST method in API Call
 * @function
 * @name getToken
 * @param {string} email 
 * @param {string} password 
 * @returns {object}
 */
export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(loadApiToken())
    axios
      .post(baseURL + 'login', {
        email,
        password,
      })
      .then((response) => {
        dispatch(loadApiTokenSuccess(response.data.body.token))
        localStorage.setItem('token', response.data.body.token)
        const token = localStorage.getItem('token')
        dispatch(getUser(token))
      })
      .catch((error) => {
        dispatch(loadApiTokenError(error.message))
      })
  }
}

/**
 * to get user token with POST method in API Call
 * @function
 * @name getUser
 * @param {string} token 
 * @returns {object}
 */
export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadApiUser())
    axios({
      method: 'POST',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(loadApiUserSuccess(response.data))
      })
      .catch((error) => {
        dispatch(loadApiUserError(error.message))
      })
  }
}

/**
 * to edit user firstname and lastname with PUT method in API Call
 * @function
 * @name editUser
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns {object}
 */
 export const editUser = (firstName, lastName) => {
  const token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(loadApiEditUser())
    axios({
      method: 'PUT',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(loadApiEditUserSuccess(response.data))
      })
      .catch((error) => {
        dispatch(loadApiEditUserError(error.message))
      })
  }
}