/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
        <Helmet>
            <title>
                About Us | Cascade Events
            </title>
        </Helmet>
        <div className="hero min-h-screen text-themeWhite">
  <div className="hero-content text-center flex flex-col gap-5">
    <div className="max-w-md text-left">
      <h1 className="text-5xl font-bold py-6">Hello there</h1>
      <p>We, the Cascade Events family, are here to give you a one-stop event solution. Our aim is to reflect your imagination
      through our artistic works. We believe your dream event can be fulfilled with our efforts. </p>
    </div>
    <div className="max-w-md text-right">
      <h1 className="text-5xl font-bold py-6">Hello there</h1>
      <p>
      Cascade Events started it's journey on the 27th of October, 2019 and we are driven by the ambition to become one of the leading event
      management teams in Bangladesh. In this journey, we need your support & inspiration. Our clients are like family to us.
      </p>
    </div>
  </div>
</div>
        </>
    );
};

export default About;