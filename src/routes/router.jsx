import { createBrowserRouter } from "react-router-dom";
import MainElement from "../components/main/MainElement";
import Home from "../components/home/Home";

const Router = new createBrowserRouter([
    {
        element: <MainElement></MainElement>,
        children: [
        ]
    },
    {
        path: "/",
        element: <Home></Home>
    }
])

export default Router