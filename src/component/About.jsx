import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div id="about" className="text-white py-12 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          About Me
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="mb-12 text-gray-400 text-center"
        >
          I’m a front-end expert web developer skilled in React, Tailwind, and Framer
          Motion, creating smooth, dynamic experiences.
        </motion.p>

        {/* Image & Text Section */}
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row justify-center items-center"
        >
          {/* Image Animation */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center"
          >
            <img
              src="gg.png"
              alt="Profile"
              className="w-[200px] h-[200px] sm:w-1/2 md:w-10/12 rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Description Animation */}
          <motion.p
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="md:w-1/2 text-gray-400 md:px-0 text-base sm:text-lg md:text-xl"
          >
            I specialize in building modern, interactive, and visually stunning
            websites using **React**, **Tailwind CSS**, and **Framer Motion**. My focus
            is on creating **high-performance, smooth animations, and great user
            experiences**.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0">
          {[
            { number: "2+", text: "Years of Experience" },
            { number: "50+", text: "Global Customers" },
            { number: "50+", text: "Projects Completed" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-bold my-4 bg-purple-500 px-6 py-3 rounded-lg shadow-lg">
                {item.number}
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="text-sm sm:text-base text-gray-400"
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

 
