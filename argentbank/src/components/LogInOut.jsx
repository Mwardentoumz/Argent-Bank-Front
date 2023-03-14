import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    logOut } from '../pages/SignIn/loginSlice';
import { useSelector } from 'react-redux';

export default function LogInOut() {

    const dispatch = useDispatch();

    const {isAuth} = useSelector((state) => state.login);

    const handleClick = () => {
        dispatch(logOut());
    }

    console.log(isAuth)
    return (
        <div>
            {isAuth ? 
            <Link className='main-nav-item' relative='path' to='/' onClick={handleClick}><i className='fa fa-user-circle'></i> Sign Out</Link> 
            :             
            <Link className="main-nav-item" relative="path" to='/SignIn'><i className='fa fa-user-circle'></i>Sign In</Link>}
        </div>
    )
}