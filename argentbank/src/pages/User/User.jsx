import './User.css';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { getUserData } from '../../services/userData';
import { useSelector, useDispatch } from 'react-redux';
import UserHeader from '../../components/UserHeader.jsx';

import axios from 'axios';
import { profilFirstName, profilLastName, profilError } from './userSlice';
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}




/**
 * 
 * @returns {JSX.Element} JSX.Element handling the user page
 */



export default function User() {
    // call the state from the store
    const dispatch = useDispatch();
    const { isRemember } = useSelector((state) => state.login);

    getUserData()
        .then((data) => {
            dispatch(profilFirstName(data.body.firstName));
            dispatch(profilLastName(data.body.lastName));
        
            if (isRemember){
                localStorage.setItem('firstName', data.body.firstName);
                localStorage.setItem('lastName', data.body.lastName);
            } else {
                localStorage.removeItem('firstName');
                localStorage.removeItem('lastName');
            }
        })
        .catch((error) => {
            dispatch(profilError(error.response.data.message));
        });
    
    return (
        <>
            <Header/>

            <main className='main bg-dark'>
                <UserHeader/>
                <h2 className='sr-only'>Accounts</h2>
                <section className='account'>
                    <div className="account-content-wrapper">
                        <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
                        <p className='account-amount'>$2,082.79</p>
                        <p className='account-description'>Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className='transaction-button'>View transactions</button>
                    </div>
                </section>
                <section className='account'>
                <div className="account-content-wrapper">
                        <h3 className='account-title'>Argent Bank Checking (x6712)</h3>
                        <p className='account-amount'>$10,928.42</p>
                        <p className='account-description'>Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className='transaction-button'>View transactions</button>
                    </div>
                </section>
                <section className='account'>
                <div className="account-content-wrapper">
                        <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
                        <p className='account-amount'>$184.30</p>
                        <p className='account-description'>Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className='transaction-button'>View transactions</button>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}