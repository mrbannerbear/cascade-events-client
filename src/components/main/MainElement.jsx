import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const MainElement = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);

  return (
    <>
      {loading && <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>}
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainElement;
