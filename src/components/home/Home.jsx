import { useState } from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navbar from "../main/Navbar";
// ..
AOS.init();

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
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
        <div data-aos="fade-out" data-aos-duration="1000">
          <div className="z-50">
            <Navbar></Navbar>
          </div>
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
                    <div className=" bg-gradient-to-t from-black via-transparent to-transparent h-full w-full absolute"></div>
                    <div
                      style={{
                        backgroundImage: `url(${slideImage.url})`,
                        height: "100vh",
                      }}
                      className="bg-center flex justify-center items-center text-center"
                    >
                      <div className="w-1/3 text-white z-20 relative top-16 pr-6">
                        {slideImage.caption}
                      </div>
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
