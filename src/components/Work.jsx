import Connect from "../assets/Connect.png";
import Brutalgram from "../assets/Brutalgram.png";
import Petition from "../assets/Petition.png";
import SocialNetwork from "../assets/SocialNetwork.png";
import TaskManagement from "../assets/TaskManagement.png";
import WeatherApp from "../assets/WeatherApp.png";

const Work = () => {
    return (
        <div
            name="work"
            className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
        >
            <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-16">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-700">
                        Work
                    </p>
                    <p className="py-6 text-lg">
                        Check out some of my recent work:
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                    <div
                        style={{ backgroundImage: `url(${Petition})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <p className="text-xl">Petition Website</p>
                                <a href="https://github.com/enriquejpca/petition">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Brutalgram})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <p className="text-xl">Brutalgram</p>
                                <a href="https://github.com/enriquejpca/image-board">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${SocialNetwork})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <p className="text-xl">Social Network</p>
                                <a href="https://github.com/enriquejpca/social-network">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${TaskManagement})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <p className="text-xl">Task Management</p>
                                <a href="https://github.com/enriquejpca/task-management">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${WeatherApp})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div pl-4"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <p className="text-xl">Weather App</p>
                                <a href="https://github.com/enriquejpca/weather-app">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Connect})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"></span>
                            <div className="pt-8 text-center">
                                <p className="text-xl">Connect 4</p>
                                <a href="https://github.com/enriquejpca/connect-four">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
