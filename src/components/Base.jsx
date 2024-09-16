import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: { type: "spring", stiffness: 300 },
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

const Base = ({ addBase, barbeque }) => {
  const bases = [
    "Grilled Catfish",
    "Oven Grilled Foil Fish",
    "Charcoal Catfish",
  ];

  return (
    <motion.div
      className="base container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className=" text-xl">Step 1: Make Your Choice</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = barbeque.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={hoverVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {barbeque.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button variants={buttonHoverVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
