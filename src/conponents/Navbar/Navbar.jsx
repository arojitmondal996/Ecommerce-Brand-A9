import { Link, NavLink } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { SiBrandfolder } from "react-icons/si";
import { FaUserLarge } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";
import { RiCoupon3Fill } from "react-icons/ri";
import image from "../../assets/Apple.png"
import "./Navbar.css"
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, handleLogout } = useContext(authContext)
    const links = <>
        <li><NavLink className="text-white font-medium" to="/"><TiHome />Home</NavLink></li>
        <li><NavLink className="text-white font-medium" to="brands"><SiBrandfolder />
            Brands</NavLink></li>
        <li><NavLink className="text-white font-medium" to="profile"><FaUserLarge />
            Profile</NavLink></li>
        <li><NavLink className="text-white font-medium" to="about"><BiDetail />
            About Us</NavLink></li>
        {/* <li><NavLink className="text-white font-medium" to="coupon"><RiCoupon3Fill />
            Coupon</NavLink></li> */}
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown text-white font-bold">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/">
                        <img className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full" src={image} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className='space-x-2 navbar-end'>
                    <div className='gap-3'>
                        {
                            user && user?.email ? <div className=' rounded-full flex items-center gap-2'>
                                <p className='text-xl hidden text-white font-semibold'>{user.displayName}</p>
                                <img className='rounded-full w-12 h-12' src={user?.photoURL} alt="" />
                            </div> : ''
                        }
                    </div>
                    <div className='gap-3'>
                        {
                            user && user?.email ? <button onClick={handleLogout} className='btn rounded-full gap-3'>LogOut</button> : <Link to='/login' className='btn btn-neutral rounded-full gap-3'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;