
import logo from "../assets/argentBankLogo.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img src={logo} className="main-nav-logo-image" alt="logo"></img>
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <Link className="main-nav-item" relative="path" to='/SignIn'><i className='fa fa-user-circle'></i>Sign In</Link>
                </div>
            </nav>
        </>
    )
}
