import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../scripts/store';
import './LoginButton.css';

/**
 * React component to create a login button updating Redux state when clicked
 * @returns { React.ReactElement } LoginButton component
 */
function LoginButton() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   return (
      <button
         className="login_button"
         onClick={(e) => {
            e.preventDefault();
            dispatch(loginAction(navigate));
         }}
      >
         Sign In
      </button>
   );
}

export default LoginButton;