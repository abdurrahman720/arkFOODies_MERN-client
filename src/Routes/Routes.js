import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Recipies from "../Pages/Recipies";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/recipes",
                element: <Recipies></Recipies>
            }
            
        ]

    }
])