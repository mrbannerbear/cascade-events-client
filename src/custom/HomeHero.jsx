/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init()

const HomeHero = ({ direction, img, title, caption, cta }) => {
    return (
      <div className="hero text-themeWhite px-2 lg:px-8  py-6 lg:py-12 text-center" data-aos="fade-out" data-aos-duration="1000">
       {direction === "flex-row" ? <div className={`hero-content gap-5 flex-col lg:flex-row lg:text-left`}>
          <img src={img} className="w-5/6 lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl lg:text-5xl font-medium">{title}</h1>
            <p className="py-6">{caption}</p>
            <p>{cta}</p>
          </div>
        </div>
        :
        direction === "flex-row-reverse" ?
        <div className={`hero-content gap-5 flex-col lg:flex-row-reverse lg:text-right`}>
          <img src={img} className="w-5/6 lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl lg:text-5xl font-medium">{title}</h1>
            <p className="py-6">{caption}</p>
            <p>{cta}</p>
          </div>
        </div>
        :
        <div className={`hero-content gap-5 flex-col w-5/6`}>
          <img src={img} className="w-5/6 lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl lg:text-5xl font-medium">{title}</h1>
            <p className="py-6">{caption}</p>
            <p>{cta}</p>
          </div>
        </div>
        }
      </div>
    );
  };
export default HomeHero;