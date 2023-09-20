import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noHeaderFooterLog = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooterLog || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooterLog || <Footer></Footer>}
        </div>
    );
};

export default Main;