// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import PropTypes from 'prop-types'
// datas imports
import account from '../datas/account'
// components imports
import Account from '../components/Account'
// API calls
import { editUser } from '../services/API'
// styles imports
import { InputButton } from '../styles/components/button'
import {
  UserHeaderMain,
  Title,
  EditNameWrapper,
  InputStyle,
  ButtonsWrapper,
  InputButtonsStyle,
  InputWrapper,
  SectionAccount
} from '../styles/pages/user'
import colors from '../styles/bases/colors'

// JSX // _________________________________________________________________

/**
 * User component to display website's user page
 * @name User
 * @returns {?JSX}
 */

const User = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  const [editName, setEditName] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const selectUser = (state) => state.getUser.user.body
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  if (user === undefined) {
    return <Navigate to="/" />
  }
  const firstName = user.firstName
  const lastName = user.lastName

  const edit = () => {
    dispatch(editUser(newFirstName, newLastName))
    setEditName(false)
  }

  return (
    <>
      <UserHeaderMain>
        <Title theme={theme}>
          Welcome back
          <br />
          {firstName} {lastName}
        </Title>
        {editName ? (
          <EditNameWrapper>
            <InputWrapper>
              <InputStyle
                theme={theme}
                value={newFirstName}
                placeholder={firstName}
                type="text"
                onChange={(e) => {
                  setNewFirstName(e.target.value)
                }}
              />
              <InputStyle
                theme={theme}
                value={newLastName}
                placeholder={lastName}
                type="text"
                onChange={(e) => {
                  setNewLastName(e.target.value)
                }}
              />
            </InputWrapper>
            <ButtonsWrapper>
              <InputButtonsStyle type="submit" value="Save" onClick={edit} />
              <InputButtonsStyle
                type="button"
                value="Cancel"
                onClick={() => {
                  setEditName(false)
                }}
              />
            </ButtonsWrapper>
          </EditNameWrapper>
        ) : (
          <InputButton
            type="button"
            borderColor={colors.primary}
            bkgColor={colors.primary}
            txtColor="white"
            width="10rem"
            onClick={() => {
              setEditName(true)
            }}
            value="Edit Name"
          />
        )}
      </UserHeaderMain>

      <h3 className="sr-only">Accounts</h3>
      <SectionAccount>
        {account.map((ac, index) => (
          <Account
            key={index}
            title={ac.title}
            amount={ac.amount}
            description={ac.description}
          />
        ))}
      </SectionAccount>
    </>
  )
}

// PROPTYPES // ___________________________________________________________

Title.propTypes = {
  theme: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default User