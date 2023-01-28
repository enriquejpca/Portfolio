import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
        hidden: { opacity: 0, scale: 0 },
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

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
                <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4 ">
                    <motion.div
                        ref={ref}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control}
                        className="box1 sm:text-right text-4xl font-bold border-2 rounded-2xl shadow-[#040c16] shadow-2xl p-4 "
                    >
                        <p>
                            Hi. I´m enrique, nice to meet you. Take a look
                            around!
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={boxVariant}
                        initial="hidden"
                        animate={control}
                    >
                        <p className="text-lg border-2 rounded-2xl shadow-[#040c16] shadow-2xl p-4">
                            I am passionate about buiing excellent software that
                            improves the lives around me. I specialize in
                            creating software for clients ranging from
                            individuals and small-businesses all the way to
                            large enterprise corporations.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
