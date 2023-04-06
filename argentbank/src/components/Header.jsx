import ArgentBankLogo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { selectUserLogin, selectFirstName } from '../utils/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../utils/reducers';

import { FiLogOut } from "react-icons/fi";
import {BiUserCircle} from "react-icons/bi";

function Header() {
    const connected = useSelector(selectUserLogin);
    const firstName = useSelector(selectFirstName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let handleLogOut = () => {
        dispatch(logOut());
        navigate('/');
    }

    return (
        <nav className='main-nav'>
            <Link to='/'>
                <img src={ArgentBankLogo} alt='Argent Bank Logo' className='main-nav-logo' />
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>

            {connected 
                    ?
                    <div className='logged-container'>
                        <BiUserCircle className="icon-sign"/>  
                        <Link className='main-nav-item' to={"/user"}>{firstName}</Link>
                        <FiLogOut className="logout-icon"/>
                        <p className='main-nav-item' onClick={handleLogOut}>Sign out</p> 
                    </div>
                    : 
                    <div className='logged-container'>
                        <FiLogOut className="icon-sign"/> 
                        <Link className="main-nav-item" to={"/sign-in"}>
                        Sign In
                        </Link>
                    </div>}
        </nav>  
    )
}

export default Header