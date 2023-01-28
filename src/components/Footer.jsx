import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-[60px] bg-[#0a192f] border-t-2 flex justify-center items-center">
            <div className="w-[200px] flex justify-evenly ">
                <a href="www.linkedin.com/in/enrique-jesus-palomino-caballero">
                    <FaLinkedin size={30} color="white" />
                </a>
                <a href="https://github.com/enriquejpca">
                    <FaGithub size={30} color="white" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
