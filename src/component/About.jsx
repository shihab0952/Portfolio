import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
    id="about"
    className="text-white py-6 ">
      <div className="container mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          I`m front-end expert web developer skilled in HTML, CSS, JavaScript, React,
          Tailwind, and Framer Motion, creating dynamic and visually stunning
          websites.
        </motion.p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.9 }}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center"
          >
            <img
              src="gg.png"
              alt=""
              className="w-[200px] h-[200px] sm:1/2 md:w-10/12"
            />
          </motion.div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.9 }}
            className="md:w-1/2 text-gray-400 md:px-0 text-base sm:text-lg md:text-xl"
          >
            I am a passionate front-end developer dedicated to creating
            user-friendly and visually appealing websites. With a strong focus
            on UI/UX design, I craft responsive, interactive websites using
            React, Tailwind CSS, and Framer Motion to deliver smooth animations
            and seamless user experiences. My services include developing modern
            web applications, e-commerce websites, and redesigning existing
            sites to improve usability and aesthetics. I ensure every project is
            tailored to the client's needs, optimizing both functionality and
            design. Having worked with several clients, I take pride in
            delivering high-quality results that meet business goals and user
            expectations. Always eager to learn, I continuously expand my skills
            to include back-end technologies, making my solutions even more
            comprehensive.
          </motion.p>
        </motion.div>
        <div className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0 ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 bg-purple-500">2+</h3>
            <motion.p
             ref={ref}
             initial={{ opacity: 0, y:100}}
             animate={inView ? { opacity: 1, y:0 } : {}}
             transition={{ delay: 1.7, duration: 0.6 }}
            className="text-sm sm:text-base text-gray-400 ">Years of Experience</motion.p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center"> 
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 bg-purple-500">50+</h3> 
            <motion.p
            ref={ref}
            initial={{ opacity: 0, y:100}}
            animate={inView ? { opacity: 1, y:0 } : {}}
            transition={{ delay: 1.7, duration: 0.6 }}
              className="text-sm sm:text-base text-gray-400 "

            >Overall Global Customar</motion.p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="text-center">
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 bg-purple-500">50+</h3>            
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y:100}}
              animate={inView ? { opacity: 1, y:0 } : {}}
              transition={{ delay:2.1, duration: 0.6 }}
            className="text-sm sm:text-base text-gray-400 "> Project I have done</motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
 