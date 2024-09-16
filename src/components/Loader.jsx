import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = ({ buttonHoverVariants }) => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className=" w-[10px] h-[10px] mt-10 mx-auto bg-white rounded-[50px]"
        variants={loaderVariant}
        animate={animation}
      ></motion.div>

      {/* Change Loader */}
      <motion.div
        variants={buttonHoverVariants}
        whileHover="hover"
        className=" border-[3px] inline-block rounded-[50px] mt-10 px-4 py-3 opacity-70 
          cursor-pointer text-xl"
        onClick={() => cycleAnimation()}
      >
        Change Loader
      </motion.div>
    </>
  );
};

export default Loader;
