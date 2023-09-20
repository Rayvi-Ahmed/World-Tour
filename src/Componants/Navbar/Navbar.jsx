import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="lg:my-7 bg-gray-800 p-5 rounded-sm text-gray-200 font-semibold opacity-100 fixed  right-10 left-9 top-0 z-10">
            <div className="flex lg:flex lg:justify-between items-center lg:gap-4">
                <div className="hover:text-white transform hover:scale-105 duration-500">
                    <ul className="flex justify-center items-center gap-5">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/countries'}>Country</Link></li>
                        <li><Link>Dashboard</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link to={'/login'}>Log In</Link></li>
                    </ul>
                </div>
                <div className="">
                    <button>Tour World</button>
                </div>

            </div>

        </div>
    );
};
export default Navbar;