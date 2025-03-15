import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";


const projects = [
  {
    id: 1,
    title: "Construction Website",
    description:
      "A modern and responsive website for a construction company, showcasing services, projects, and contact information.",
    image: "/1.png",
    link: "https://construction-website-rose-two.vercel.app/",
    technologies: ["#React, ", "MUi, ", "framer-motion, ", "Tailwind CSS"],
  },

  {
    id: 2,
    title: "Agency Website",
    description:
      "A modern and responsive website for a construction company, showcasing services, projects, and contact information.",
    image: "/2.png",
    link: "https://wave-programming-agency.vercel.app/",
    technologies: [
      "#HTML, ",
      "CSS, ",
      "JavaScript, ",
      "React, ",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "A modern e-commerce website with React, featuring fast performance, dynamic UI, and responsive design.",
    image: "/e1.png",
    link: "https://project1-cyan-one.vercel.app/",
    technologies: [
      "#HTML, ",
      "CSS, ",
      "JavaScript, ",
      "React, ",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce website with modern UI, dynamic features, and seamless user experience.",
    image: "e2.png",
    link: "https://shihab0952.github.io/e-commerce/",
    technologies: ["#HTML, ", "CSS, ", "JavaScript"],
  },
];

const Work = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
    id="work"
    className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl text-white underline font-bold text-center mb-12"
        >
          My Work
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center "
        >
          A collection of my latest projects showcasing my skills in web development and UI/UX design.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 ">
          {projects.map((projects) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: projects.id * 0.2, duration: 0.5 }}
              key={projects.id}
              className="bg-gray-900 shadow shadow-purple-300 rounded-lg overflow-hidden "
            >
              <img src={projects.image} className="w-full h-52 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {projects.title}
                </h3>
                <p className="text-slate-400 mb-4">{projects.description}</p>
                <h4 className="text-[20px] text-purple-500">
                  {projects.technologies}
                </h4>
                <button
                  onClick={() => window.open(projects.link, "_blank")}
                  className=" text-white bg-purple-400 hover:bg-purple-700 px-6 py-3 rounded-full transition duration-300 text-center items-center mx-auto"
                >
                  Visit Website
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
