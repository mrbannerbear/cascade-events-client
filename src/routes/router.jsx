import { createBrowserRouter } from "react-router-dom";
import MainElement from "../components/main/MainElement";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import Admin from "../components/admin/Admin";

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
            {
                element: <Admin/>,
                path: "/admin"
            }
        ]
    },
    {
        path: "/",
        element: <Home></Home>
    }
])

export default Router