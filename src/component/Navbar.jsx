import { motion } from "framer-motion";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: "spring",
      duration: 1,
    },
  };

  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about"},
    { id: 2, text: "Services", to:"services" },
    { id: 3, text: "Work", to:"work" },
    { id: 4, text: "Contact", to:"contact"},
  ];

  return (
    <div>
      <motion.div
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
      
        className="container mx-auto hidden md:flex justify-between items-center py-6  shadow-[0_4px_6px_-1px_rgba(156,163,175,0.3)]"
      >
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-purple-500">PRO</span>
          <span className="text-purple-700 italic">CODER</span>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-6 list-none lg:text-xl font-semibold md:text-base text-white">
            {items.map(({ id, text, to }) => (
              <li key={id}>
                
              <Link 
              to={to}
              smooth={true}
              duration={500}
              offset={-70}
              
              >
              {text}
              </Link>
                
                </li>
            ))}
          </ul>
        </div>
        <a className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-700 transition duration-300 py-2 text-white rounded-4xl">
          Download CV
        </a>
      </motion.div>
      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className="bg-purple-300 w-2/3 h-screen text-black font-bold cursor-pointer fixed z-10"
          >
            <div className="px-7 py-6">
              {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, to }) => (
                    <li
                      key={id}
                      className="hover:text-purple-500 duration-200 cursor-pointer"
                    >
                        
              <Link 
              to={to}
              smooth={true}
              duration={500}
              offset={-70}
              
              >
              {text}
              </Link>
                    </li>
                  ))}
                </ul>
                <a className="text-lg bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-4xl">
                  DownLoad CV
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold items-center gap-2 py-6 px-4"
        >
          <span className="text-purple-500"> PRO</span>
          <span className="text-purple-600 italic">CODER</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;




