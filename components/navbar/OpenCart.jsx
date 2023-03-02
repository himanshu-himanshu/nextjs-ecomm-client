import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CloseButton from "../../utils/CloseButton";
import Cart from "./Cart";
import { products } from "../../utils/products";
import cross from "../../assets/close.png";

const OpenCart = ({ handleCloseCart, handleOpenCart }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-800 absolute w-full h-full top-0 left-0 overflow-hidden cursor-crosshair z-40"
        onClick={() => handleCloseCart()}
      ></motion.div>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute h-full bg-white top-0 right-0 w-full sm:min-w-[500px] sm:w-1/3 overflow-hidden z-40"
      >
        <div className="flex flex-row justify-between px-6 py-6 h-[10vh]">
          <div onClick={() => handleCloseCart()}>
            <CloseButton />
          </div>
          <Cart handleOpenCart={handleOpenCart} />
        </div>
        <div className="h-[90vh]">
          <div className="flex flex-col h-4/6 justify-center items-center">
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-Gruppo tracking-tight">
              Your cart is empty !
            </h1> */}
            <div className="w-full overflow-y-scroll p-2 cart_div">
              {products.map((item) => (
                <div className="group flex flex-row items-center hover:cursor-pointer duration-300 p-4 border-b border-gray-300">
                  <div className="relative duration-300 w-1/2">
                    <img src={item.image} alt="" className="w-24 h-24" />
                    {/* <div className="hidden absolute h-full w-full top-0 left-0 group-hover:flex justify-center items-center duration-300 bg-gray-100/40">
                      <button className="w-3/4 py-6 px-2 bg-red-100 bg-white/90 uppercase tracking-wide duration-300 hover:bg-black/90 hover:text-gray-100">
                        Add to Cart
                      </button>
                    </div> */}
                  </div>
                  <div className="flex flex-col justify-between w-1/2 p-2 space-y-4">
                    <div className="flex flex-row justify-between items-center">
                      <h1>{item.title}</h1>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="font-bold">${item.price}</h1>
                      <span className="flex flex-row items-center justify-center p-2 space-x-1">
                        <Image src={cross} alt="" className="w-3 h-3" />
                        <span className="text-lg">3</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-2/6 p-4 bg-secondary">
            <h1 className="my-8 text-lg uppercase tracking-wide flex justify-between font-Gruppo font-extrabold">
              <span>Subtotal</span>
              <span>$400</span>
            </h1>
            <button className="w-full font-bold px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white duration-200 text-2xl font-Gruppo tracking-wider">
              Checkout
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OpenCart;
