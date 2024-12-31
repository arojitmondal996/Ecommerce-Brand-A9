import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen mx-auto">
            <div className="font-poppins bg-[#225f6a]">
                <Navbar /> 
            </div>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;