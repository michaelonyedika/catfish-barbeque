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

const Toppings = ({ addTopping, barbeque }) => {
  let toppings = [
    "Fresh Pepper",
    "Ginger",
    "Tomatoes",
    "Garlic",
    "Onions",
    "Mix Spices",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className=" text-xl">Step 2: Select recipes</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = barbeque.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={hoverVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonHoverVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
