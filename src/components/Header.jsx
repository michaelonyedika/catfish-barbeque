import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: -10,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
};

const svgVariants = {
  hidden: {
    opacity: 0,
    rotate: -90,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.3,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.3,
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
      <motion.div
        className="grow ml-[20px] text-xl"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">
          <h1 className=" text-xl font-bold md:text-2xl">CatFish Barbeque</h1>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
