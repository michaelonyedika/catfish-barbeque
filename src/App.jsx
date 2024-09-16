import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const [barbeque, setBarbeque] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setBarbeque({ ...barbeque, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!barbeque.toppings.includes(topping)) {
      newToppings = [...barbeque.toppings, topping];
    } else {
      newToppings = barbeque.toppings.filter((item) => item !== topping);
    }
    setBarbeque({ ...barbeque, toppings: newToppings });
  };

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Modal Component */}
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Animate the whole Content */}
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route
            path="/base"
            element={<Base addBase={addBase} barbeque={barbeque} />}
          />

          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} barbeque={barbeque} />}
          />

          <Route
            path="/order"
            element={<Order barbeque={barbeque} setShowModal={setShowModal} />}
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
