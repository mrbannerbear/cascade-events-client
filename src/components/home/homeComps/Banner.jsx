import { Fade } from "react-slideshow-image";

const Banner = () => {

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
        <div className="min-h-screen z-50">
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
    );
};

export default Banner;