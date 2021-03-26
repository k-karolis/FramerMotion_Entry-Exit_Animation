import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(isVisible === false ? true : false);
  };

  return (
    <div onClick={() => toggleVisible()} className='App'>
      <div className={"State"}>
        <h3>Click anywhere inside viewport.</h3>
        <h5>This is Framer Motion Entry and Exit animation test code.</h5>
        <div>
          Component has
          {isVisible ? (
            <h5 style={{ color: "green" }}> mounted</h5>
          ) : (
            <h5 style={{ color: "red" }}>unmounted</h5>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key='1'
            initial={{
              scale: 0,
              x: -1000,
              opacity: 0,
              transition: { duration: 1 },
            }}
            animate={{
              scale: 1,
              x: 0,
              opacity: 1,
              transition: { duration: 1 },
            }}
            exit={{
              scale: 0,
              x: 1000,
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <img src={logo} className='App-logo' alt='logo' />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
