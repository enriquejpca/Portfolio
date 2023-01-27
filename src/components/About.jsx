const About = () => {
    return (
        <div
            name="about"
            className="bg-[#0a192f] w-full h-screen text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-yellow-700">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>
                            Hi. I´m enrique, nice to meet you. Take a look
                            around!
                        </p>
                    </div>
                    <div>
                        <p className="text-lg">
                            I am passionate about buiing excellent software that
                            improves the lives around me. I specialize in
                            creating software for clients ranging from
                            individuals and small-businesses all the way to
                            large enterprise corporations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;