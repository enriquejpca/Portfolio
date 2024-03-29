import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
{
    /*import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";*/
}

const Home = () => {
    {
        /*const particlesInit = (engine) => {
        loadFull(engine);
    };*/
    }
    return (
        <div name="home" className="bg-[#0a192f] w-full h-screen ">
            <div>
                {/*<Particles init={particlesInit} options={particlesOptions} />*/}
            </div>
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-full ">
                <p className="text-gray-300 text-base">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl py-4 font-bold text-[#ccd6f6]">
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Enrique Jesus Palomino Caballero")
                                .pauseFor(15000)
                                .start();
                        }}
                    />
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                    I´m a Full Stack Developer
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px] text-base">
                    I´m a full-stack developer specializing in building
                    exceptional digital experiences. Currently, I´m focused on
                    responsive full-stack web applications.
                </p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-700 hover:border-yellow-700 text:lg">
                            View Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
