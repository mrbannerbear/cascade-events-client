import { createBrowserRouter } from "react-router-dom";
import MainElement from "../components/main/MainElement";
import Home from "../components/home/Home";
import About from "../components/about/About";

const Router = new createBrowserRouter([
    {
        element: <MainElement></MainElement>,
        children: [
            {
                element: <About/>,
                path: "/about"
            }
        ]
    },
    {
        path: "/",
        element: <Home></Home>
    }
])

export default Router