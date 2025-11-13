import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"

const Lauout = () => {
    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Lauout