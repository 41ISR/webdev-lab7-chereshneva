import {createBrowserRouter} from "react-router-dom"
import Signin from "../pages/Signin/Signin"
import Signup from "../pages/Signup/Signup"
import Lauout from "../pages/Lauout/Lauout"
import Board from "../pages/Board"

export const router = createBrowserRouter(
    [
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/signin",
            element: <Signin />
        },
        {
            path: "/",
            element: <Lauout />, 
            children: [
                {
                    index: true,
                    element: <Board />
                }
            ]
        }
    ]
)