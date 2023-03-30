// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import PropTypes from 'prop-types'
// API calls
import { getToken } from '../services/API'
// components imports
import Input from '../components/Input'
// styles imports
import colors from '../styles/bases/colors'
import { InputButton } from '../styles/components/button'
import {
  SignInMain,
  SignInSection,
  SignInSectionHeader,
  SignInIcon,
  SignInTitle,
  ErrorMessage,
} from '../styles/pages/signIn'

// JSX // _________________________________________________________________

/**
 * SignIn component to display website's log in page
 * @name SignIn
 * @returns {?JSX}
 */

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidFields, setInvalidFields] = useState('')

  const dispatch = useDispatch()

  const theme = useSelector((state) => state.theme)
  const message = useSelector((state) => state.getUser.user.status)
  const tokenExist = useSelector((state) => state.token.tokenExist)

  const handleSubmit = (e) => {
    e.preventDefault()
    setInvalidFields('')
    if (email === '' || password === '') {
      return setInvalidFields('Please fill fields correctly')
    } else {
      dispatch(getToken(email, password))
    }
  }

  if (message === 200) {
    return <Navigate to="/user" />
  }

  return (
    <>
      <SignInMain theme={theme}>
        <SignInSection theme={theme}>
          <SignInSectionHeader>
            <SignInIcon
              theme={theme}
              className="fa fa-user-circle"
            ></SignInIcon>
            <SignInTitle theme={theme}>Sign In</SignInTitle>
          </SignInSectionHeader>
          <form onSubmit={handleSubmit}>
            <Input
              direction={'column'}
              forAndId={'email'}
              inputType={'text'}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <Input
              direction={'column'}
              forAndId={'password'}
              inputType={'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <Input
              direction={'row-reverse'}
              forAndId={'remember-me'}
              inputType={'checkbox'}
            />
            <ErrorMessage>{invalidFields}</ErrorMessage>
            {tokenExist === false && (
              <ErrorMessage>Email or password invalid</ErrorMessage>
            )}
            <InputButton
              theme={theme}
              type="submit"
              borderColor={colors.primary}
              bkgColor={colors.primary}
              txtColor="white"
              width="100%"
              value="Sign In"
            />
          </form>
        </SignInSection>
      </SignInMain>
    </>
  )
}

// PROPTYPES // ___________________________________________________________

SignInMain.propTypes = {
  theme: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default SignIn