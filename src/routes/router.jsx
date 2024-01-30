import { createBrowserRouter } from "react-router-dom";
import MainElement from "../components/main/MainElement";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";

const Router = new createBrowserRouter([
    {
        element: <MainElement></MainElement>,
        children: [
            {
                element: <About/>,
                path: "/about"
            },
            {
                element: <Projects/>,
                path: "/projects"
            },
            {
                element: <Contact/>,
                path: "/contact"
            },
        ]
    },
    {
        path: "/",
        element: <Home></Home>
    }
])

export default Router