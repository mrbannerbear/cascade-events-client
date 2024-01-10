import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navbar from "../main/Navbar";
import Banner from "./homeComps/Banner";
import HomeContent from "./homeComps/HomeContent";
import Footer from "../main/Footer";
import { Helmet } from "react-helmet-async";
// ..
AOS.init();

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setShowNav(true); // showNav is set to true once scrolled to 300px
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Callback that calls handleScroll when scrolled

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup function
    };
  }, []);

  const scrollClass = showNav ? "scroll-down" : "scroll-up";

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>

    <Helmet>
        <title>
            Home | Cascade Events
        </title>
    </Helmet>
    
      {loading && (
        <div className="min-h-screen flex justify-center items-center bg-themeBlack">
          <span>
            <img src="/logo-2.png" className="w-20 h-20" alt="" />
          </span>
        </div>
      )}

      {!loading && (
        <div data-aos="fade-out" data-aos-duration="1000">
          {showNav && <Navbar scrollClass={scrollClass}></Navbar>}
          
          <Banner></Banner>

          <div className="min-h-screen py-6">
            <HomeContent></HomeContent>
          </div>

        <FloatingWhatsApp phoneNumber="+8801909221681" avatar="/logo-2.png" accountName="Cascade Events"></FloatingWhatsApp>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Home;