import { useEffect, useState } from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navbar from "../main/Navbar";
// ..
AOS.init();

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setShowNav(true);  // showNav is set to true once scrolled to 300px
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Callback that calls handleScroll when scrolled

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup function
    };
  }, []);

  const scrollClass = showNav ? "scroll-down" : "scroll-up"

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const slideImages = [
    {
      url: "/wedding1.jpg",
      caption: (
        <>
          <h1 className="font-medium text-4xl">Wedding Events</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            modi, asperiores, alias beatae libero aut reiciendis voluptas amet
            reprehenderit corrupti voluptatum nihil. Voluptas fuga dolores
            minima. Eaque possimus neque facere.
          </p>
        </>
      ),
    },
    {
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: (
        <>
          <h1 className="font-medium text-4xl">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            modi, asperiores, alias beatae libero aut reiciendis voluptas amet
            reprehenderit corrupti voluptatum nihil. Voluptas fuga dolores
            minima. Eaque possimus neque facere.
          </p>
        </>
      ),
    },
    {
      url: "/social1.jpg",
      caption: (
        <>
          <h1 className="font-medium text-4xl">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            modi, asperiores, alias beatae libero aut reiciendis voluptas amet
            reprehenderit corrupti voluptatum nihil. Voluptas fuga dolores
            minima. Eaque possimus neque facere.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {loading && (
        <div className="min-h-screen flex justify-center items-center bg-themeBlack">
          <span>
            <img src="/logo-2.png" className="w-20 h-20" alt="" />
          </span>
        </div>
      )}

      {!loading && (
        <div data-aos="fade-out" data-aos-duration="1000" >

            {showNav &&
                <Navbar scrollClass={scrollClass}></Navbar>
               }

          <div className="min-h-screen">
            <div className="slide-container h-full">
              <Fade
                autoplay={true}
                arrows={false}
                canSwipe={true}
                duration={3000}
                infinite
              >
                {slideImages.map((slideImage, index) => (
                  <div key={index} className="h-full">
                    {/* <div className=" bg-gradient-to-t from-black via-transparent to-transparent h-full w-full absolute"></div> */}
                    <div
                      style={{
                        backgroundImage: `url(${slideImage.url})`,
                        height: "100vh",
                      }}
                      className="bg-center flex justify-center items-center"
                    >
                      <div className="w-full bg-themeBlack/50  flex justify-center items-center text-center h-max relative top-16 py-4">
                        <div className="lg:w-1/3 text-white z-20">
                          {slideImage.caption}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
          </div>

          <div className="min-h-screen">

            </div>
        </div>
      )}
    </>
  );
};

export default Home;
