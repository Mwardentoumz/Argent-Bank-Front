
import Header from "../../components/Header"
import { Navigate, useNavigate } from "react-router"


export default function NotFound() {

    const handleClick = () => {
        Navigate("/")
    }

    return (
        <>
            <Header />
            <div className="notfound">
                <a href='/' onClick={handleClick}>La page que vous avez demandé n'existe pas. Cliquez pour retourner à la page d'accueil</a>
            </div>
        </>
    )
}