import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  calculateTotalItemsQuantity,
} from "../../redux/features/cart/cartSlice";
import { toast, Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { ShoppingBagIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Product = ({ item }) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useDispatch();

  const addItemToCartFunction = () => {
    setAddingToCart(true);
    setTimeout(() => {
      dispatch(addItemToCart(item));
      setAddingToCart(false);
      toast.custom(
        <motion.div
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className="px-6 py-6 bg-[#43766C] text-secondary font-Borui rounded-sm flex flex-row space-x-4 duration-300"
        >
          <span className="tracking-wider"> Item added to cart</span>
          <ShoppingBagIcon className="h-6 w-6 text-secondary" />
        </motion.div>
      );
    }, 700);
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 700,
        }}
      />
      <div className=" flex flex-col justify-center items-center hover:cursor-pointer duration-300 border border-gray-100/70 rounded-sm">
        <div className="group relative duration-300 px-2 py-4">
          <img src={item.image} alt="" className="w-full h-80" />
          <div className="hidden absolute h-full w-full top-0 left-0 group-hover:flex justify-center items-center duration-300 bg-gray-100/40">
            {!addingToCart && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[200px] py-6 px-2 bg-gray-100 uppercase tracking-wide duration-300 hover:bg-black/90 hover:text-gray-100"
                onClick={() => {
                  addItemToCartFunction();
                }}
              >
                Add to Cart
              </motion.button>
            )}
            {addingToCart && (
              <button className="w-[200px] py-5 px-2 bg-secondary uppercase tracking-wide duration-300 flex justify-center items-center">
                <Cog8ToothIcon className="h-8 w-8 text-primary animate-spin" />
              </button>
            )}
          </div>
        </div>
        <div className="w-full px-2 pb-1 flex flex-row justify-between items-center">
          <h1 className="font-semibold text-gray-700 text-sm">{item.brand}</h1>
          <span className="flex flex-row items-center space-x-2">
            <span className="text-gray-600">{item.rating}</span>
            <StarIcon className="h-5 w-5 text-yellow-500" />
          </span>
        </div>
        <div className="flex flex-row justify-between w-full px-2 pb-2">
          <h1 className="text-gray-700">{item.title}</h1>
          <div className="flex flex-row space-x-2 items-center">
            <h1 className="text-gray-700">${item.price}</h1>
            <button
              className="text-pink-700"
              onClick={() => console.log(item.title)}
            >
              <HeartIcon className="h-5 w-5 text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
