/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
import { useState } from "react";
import {FaFacebook, FaInstagram} from "react-icons/fa"

const Navbar = ({scrollClass}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        
        <div className={`text-white flex px-6 py-3 bg-themeBlack z-50 ${scrollClass}`} data-aos="fade-down">
            <div className="bg-themeBlack px-3 flex flex-col justify-center items-center gap">
                <span><img src="/public/logo-2.png" className="w-16" alt="" /></span>
                <span className="text-sm text-orange-200">Cascade Events</span>
            </div>

            <div className="flex-1 items-end flex flex-col justify-center gap-y-5">
                <ul className="flex gap-3 md:gap-6">
                    <span><a href="https://www.facebook.com/cascadeeventsctg/" target="_blank" rel="noreferrer"><FaFacebook className="text-2xl"></FaFacebook></a></span>
                    <span><a href=""><FaInstagram className="text-2xl"></FaInstagram></a></span>
                </ul>
                    <ul className="text-white gap-5 md:gap-10 hidden lg:flex">
                    <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                    <div className="dropdown lg:hidden">
      <button className="btn btn-ghost lg:hidden" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </button>
    {dropdownOpen &&  <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
    h-max
    ">
      <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
      </ul>}
    </div>
                    </div>
            </div>

        </div>
        
    );
};

export default Navbar;