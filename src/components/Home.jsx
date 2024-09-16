import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Loader from "./Loader";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const buttonHoverVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>CatFish Barbeque is Here</h2>
      <Link to="/base">
        <motion.button variants={buttonHoverVariants} whileHover="hover">
          Order Barbeque
        </motion.button>
      </Link>

      {/* Import Loader */}
      {/* <Loader buttonHoverVariants={buttonHoverVariants} /> */}
    </motion.div>
  );
};

export default Home;
