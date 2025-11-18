import { Link } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const NavBar = () => {
    const {token} = useUserStore()
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="h2 navbar-brand">Feedback</div>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                    {!token ? (
                        <li>
                            <Link to={"/signin"}>Войти</Link>
                        </li>
                    ) : (
                        <Link to={"/logout"}>Выйти</Link>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavBar