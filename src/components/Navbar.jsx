import { useState } from "react";
import { GiTripleScratches } from "react-icons/gi";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 text-lg border-y ">
            <GiTripleScratches className="h-8 w-8" />

            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul
                className={
                    !nav
                        ? "hidden"
                        : " absolute top-0 left-0 w-full opacity-95  h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="hidden md:flex fixed flex-col top-[80%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
                        <a
                            href="www.linkedin.com/in/enrique-jesus-palomino-caballero"
                            className="flex justify-between items-center w-full text-gray-300"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
                        <a
                            href="https://github.com/enriquejpca"
                            className="flex justify-between items-center w-full text-gray-300"
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    {/*<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
                        <a
                            href="/"
                            className="flex justify-between items-center w-full text-gray-300"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
            </li>*/}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
