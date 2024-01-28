import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CloseButton from "../../utils/CloseButton";
import Cart from "./Cart";
import { products } from "../../utils/products";
import cross from "../../assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

const OpenCart = ({ handleCloseCart, handleOpenCart }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.cartItems);
  console.log(items);
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
        <div className="flex flex-row justify-between items-center px-6 py-6 h-[10vh] border-b">
          <div onClick={() => handleCloseCart()}>
            <CloseButton />
          </div>
          <h1 className="font-Borui tracking-wide">Your Cart</h1>
          <Cart handleOpenCart={handleOpenCart} />
        </div>
        <div className="h-[90vh]">
          <div className="flex flex-col h-4/6 justify-center items-center">
            {/** If there is no Item in cart render the div below */}
            {items.length === 0 && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <ShoppingCartIcon class="h-24 w-24 text-primary" />
                <h1 className="text-2xl md:text-3xl font-Gruppo tracking-tight text-primary flex justify-center items-center">
                  Your cart is currently empty !
                </h1>
                <p className="font-Gruppo tracking-tight text-gray-600 text-lg max-w-sm text-center">
                  Go ahead and explore top categories to make your choice.
                </p>
              </div>
            )}

            {/** Render if there is anything added to the cart */}
            {items.length !== 0 && (
              <div className="w-full overflow-y-scroll p-2 cart_div h-full shadow-sm">
                {items.map((item) => (
                  <div
                    className="group flex flex-row items-center duration-300 p-4 border-b border-gray-200"
                    key={item.id}
                  >
                    <div className="relative duration-300 w-1/2">
                      <img src={item.image} alt="" className="w-24 h-24" />
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
            )}
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
