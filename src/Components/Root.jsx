import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
      <div className="container mx-auto">
        <Navbar></Navbar>
            <div className="min-h-[calc(100vh-549px)]  lg:min-h-[calc(100vh-373px)] md:min-h-[calc(100vh-417px)]">
                
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;