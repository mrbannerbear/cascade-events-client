import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
    return (
        <>
        <Helmet>
            <title>Contact | Cascade Events</title>
        </Helmet>
        <div className="hero min-h-screen text-themeWhite">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <div className="py-6">
            <div>
            Phone: <a href="tel:+880 190 922 1681" className="text-blue-700">+880 190 922 1681</a>
        </div>
        <div>
            Send us a mail at: <a href="mailto:cascadeeventsctg@gmail.com" className="text-blue-700">
            cascadeeventsctg@gmail.com
            </a>
        </div>
            </div>
          </div>
        </div>
        <ScrollRestoration/>
      </div>
      </>
    );
};

export default Contact;