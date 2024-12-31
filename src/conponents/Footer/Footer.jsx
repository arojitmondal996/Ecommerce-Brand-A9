import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer flex w-full justify-between bg-[#6a2246] text-base-content p-10">
                <NavLink className="text-gray-400 font-medium">
                    <h6 className="footer-title text-yellow-400">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </NavLink>
                <NavLink className="text-gray-400 font-medium">
                    <h6 className="footer-title text-yellow-400">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </NavLink>
                <NavLink className="text-gray-400 font-medium">
                    <h6 className="footer-title text-yellow-400">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </NavLink>
            </footer>
            <footer className="footer bg-[#6a2246] text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <p className="text-gray-400">
                        Our Industries
                        <br />
                        Copyright © 2024 - All right reserved
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <NavLink className="text-red-700 text-4xl" to="/profile"><FaYoutube /></NavLink>
                    <NavLink className="text-[#326CE5] text-3xl" to="/profile"><FaGithub /></NavLink>
                    <NavLink className="text-[#00acee] text-3xl" to="/profile"><FaTwitterSquare /></NavLink>
                    <NavLink className="text-[#316FF6] text-3xl" to="/profile"><FaFacebook /></NavLink>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;