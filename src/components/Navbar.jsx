import { useState } from "react";
import { GiSiren } from "react-icons/gi";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <GiSiren />

            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Experience</li>
            </ul>

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul
                className={
                    !nav
                        ? "hidden"
                        : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Experience</li>
            </ul>

            <div className="flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center">
                        <a href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;