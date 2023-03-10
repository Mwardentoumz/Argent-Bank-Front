import './SignIn.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    loginPending,
    loginSuccess,
    loginFailed,
    loginRemember,
} from './loginSlice';
import { userLogin } from '../../services/userLogin';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

import spinner from '../../assets/spinner.gif';

/**
 * 
 * @returns {JSX.Element} JSX.Element handling the sign-in
 */


export default function SignIn() {


    const { isLoading, isRemember } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    function handleChange({ currentTarget }) {
        const { name, value } = currentTarget
        setCredentials({
            ...credentials,
            [name]:value,
        })
    }

    async function handleSubmit(e){
        e.preventDefault()

        dispatch(loginPending());
        try {
            const isUserAuthenticated = await userLogin(credentials);
            if (isRemember){
                localStorage.setItem('token', isUserAuthenticated.body.token);
                
            } else {
                localStorage.removeItem('token');
            }

            dispatch(loginSuccess());
            navigate('/user');
        } catch (error) {
            console.log(error);
            dispatch(loginFailed(error.response.data.message));
        }
    }



    return (
        <>
        <Header/>

        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='email'>Username</label>
                        <input type='text' name='email' id='email' onChange={handleChange}/>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' onChange={handleChange}/>
                    </div>
                    <div className='input-remember'>
                        <input type='checkbox' name='remember' id='remember-me' defaultChecked={isRemember} onChange={() => dispatch(loginRemember(!isRemember))}/>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                    {isLoading && <div className='spinner'><img src={spinner} alt='spinner'></img></div>}
                </form>
            </section>

        </main>

        <Footer/>

        </>
    );
}