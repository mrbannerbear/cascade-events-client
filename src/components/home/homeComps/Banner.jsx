import { Fade } from "react-slideshow-image";

const Banner = () => {

    const slideImages = [
        {
          url: "/wedding1.jpg",
          caption: (
            <>
              <h1 className="font-medium text-4xl">Crafting Memorable Weddings</h1>
              <p>
              Let us turn your dream wedding into a reality with meticulous planning and exquisite attention to detail.
              </p>
            </>
          ),
        },
        {
          url: "/social2.jpg",
          caption: (
            <>
              <h1 className="font-medium text-4xl">Elevating Social Occasions</h1>
              <p>
              From intimate gatherings to joyous celebrations,
              we specialize in creating memorable social events tailored to your unique style.
              </p>
            </>
          ),
        },
        {
          url: "/social2.jpg",
          caption: (
            <>
              <h1 className="font-medium text-4xl">Orchestrating Corporate Events</h1>
              <p>
              Trust our expert team to deliver professional and polished corporate events that leave a lasting impression on clients and colleagues alike.
              </p>
            </>
          ),
        },
      ];

    return (
        <div className="min-h-screen z-20">
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
                  className="bg-center flex justify-center items-center bg-cover"
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