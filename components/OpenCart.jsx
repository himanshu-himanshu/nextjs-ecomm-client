import React from "react";
import Cart from "./Cart";

const OpenCart = ({ handleCloseCart, handleOpenCart }) => {
  return (
    <>
      <div
        className="bg-gray-100 opacity-80 absolute w-full h-full top-0 left-0"
        onClick={() => handleCloseCart()}
      ></div>
      <div className="absolute h-full bg-white top-0 right-0 w-1/3 z-10">
        <div className="flex flex-row justify-between px-6 py-6 h-[10vh]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => handleCloseCart()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <Cart handleOpenCart={handleOpenCart} />
        </div>
        <div className="h-[90vh]">
          <div className="flex flex-col h-4/5 justify-center items-center">
            <h1 className="text-5xl font-Gruppo tracking-tight">
              Your cart is empty !
            </h1>
          </div>
          <div className="w-full h-1/5 px-4 py-8 bg-[#fffef9]">
            <button className="w-full font-bold px-8 py-4 border border-[#113034] text-[#113034] bg-white hover:bg-[#113034] hover:text-white duration-200 text-2xl font-Gruppo tracking-wider">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenCart;
