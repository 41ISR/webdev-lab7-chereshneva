import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="h2 navbar-brand">Feedback</div>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar