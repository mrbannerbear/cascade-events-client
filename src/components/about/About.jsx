/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
    return (
        <>
        <Helmet>
            <title>
                About Us | Cascade Events
            </title>
        </Helmet>
        <div className="hero min-h-screen text-themeWhite">

  <div className="hero-content text-center flex flex-col gap-2 pb-12">
  <h1 className="text-4xl font-semibold mb-4x">About Us</h1>
    <div className="max-w-md text-left flex justify-center items-center gap-5 flex-col">
      <div>
        <img src="/about2.jpg" alt="" className="rounded-md"/>
      </div>
      <div><h1 className="text-5xl font-bold py-6"></h1>
      <p>We, the Cascade Events family, are here to give you a one-stop event solution. Our aim is to reflect your imagination
      through our artistic works. We believe your dream event can be fulfilled with our efforts. </p>
      </div>
    </div>
    <div className="max-w-md text-right">
      <h1 className="text-3xl font-semibold py-6">Our Journey</h1>
      <p>
      Cascade Events started it's journey on the 27th of October, 2019 and we are driven by the ambition to become one of the leading event
      management teams in Bangladesh. In this journey, we need your support & inspiration. Our clients are like family to us.
      </p>
    </div>
  </div>
</div>
<ScrollRestoration/>
        </>
    );
};

export default About;