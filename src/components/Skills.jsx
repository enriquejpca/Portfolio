import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import React from "../assets/React.png";
import Tailwind from "../assets/Tailwind.png";
import Github from "../assets/Github.png";

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I´ve worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto my-4"
                            src={HTML}
                            alt="HTML icon"
                        />
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto my-4"
                            src={CSS}
                            alt="CSS icon"
                        />
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto my-4"
                            src={JS}
                            alt="JS icon"
                        />
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto my-4"
                            src={React}
                            alt="React icon"
                        />
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto my-4"
                            src={Tailwind}
                            alt="Tailwind icon"
                        />
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto my-4"
                            src={Github}
                            alt="Github icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
