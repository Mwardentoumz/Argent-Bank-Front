
import logo from "../assets/argentBankLogo.png"
import { Link } from "react-router-dom"
import LogInOut from "./LogInOut"

export default function Header() {
    return (
        <>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img src={logo} className="main-nav-logo-image" alt="logo"></img>
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <LogInOut/>
            </nav>
        </>
    )
}
