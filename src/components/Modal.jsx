import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    y: "-100px",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className=" fixed top-0 left-0 w-full h-full bg-modalBg z-10"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className=" max-w-[400px] my-0 mx-auto bg-white rounded-[10px] 
              text-center py-10 px-5"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            <h1 className=" text-[#444] font-bold">
              Want to order another Catfish Barbeque?
            </h1>
            <Link to="/">
              <button className=" text-[#444] border-[#444] font-bold mt-5">
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
