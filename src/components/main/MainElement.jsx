import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainElement = () => {



  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainElement;
