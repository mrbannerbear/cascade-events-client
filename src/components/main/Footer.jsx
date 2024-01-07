import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 text-themeWhite border-themeWhite border-t pt-6">
        <aside>
          <ul className="flex gap-4 lg:mb-4">
                <li><NavLink to={"/admin"}>Admin</NavLink></li>
                <li><NavLink to={"/resources"}>Resources</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
            </ul>
            <p>Cascade Events, {new Date().getFullYear()}</p>
        </aside>
        <p>
        </p>
      </footer>
    );
};

export default Footer;