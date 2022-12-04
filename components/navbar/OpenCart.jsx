import { motion } from "framer-motion";

import React from "react";
import CloseButton from "../../utils/CloseButton";
import Cart from "./Cart";

const OpenCart = ({ handleCloseCart, handleOpenCart }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-800 absolute w-full h-full top-0 left-0 overflow-hidden cursor-crosshair z-20"
        onClick={() => handleCloseCart()}
      ></motion.div>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute h-full bg-white top-0 right-0 w-full sm:min-w-[500px] sm:w-1/3 z-10 overflow-hidden z-40"
      >
        <div className="flex flex-row justify-between px-6 py-6 h-[10vh]">
          <div onClick={() => handleCloseCart()}>
            <CloseButton />
          </div>
          <Cart handleOpenCart={handleOpenCart} />
        </div>
        <div className="h-[90vh]">
          <div className="flex flex-col h-4/5 justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-Gruppo tracking-tight">
              Your cart is empty !
            </h1>
          </div>
          <div className="w-full h-1/5 px-4 py-8 bg-secondary">
            <button className="w-full font-bold px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white duration-200 text-2xl font-Gruppo tracking-wider">
              Shop Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OpenCart;
