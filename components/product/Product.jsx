import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/features/cart/cartSlice";
import { Toaster } from "react-hot-toast";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { showToast } from "../../utils/showToast";

const Product = ({ item }) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCart = () => {
    setAddingToCart(true);
    setTimeout(() => {
      const productWithQuantity = { ...item, quantity: 1 };
      dispatch(addItemToCart(productWithQuantity));
      setAddingToCart(false);
      showToast({ message: "Item added to cart", type: "Success" });
    }, 700);
  };

  const handleProductRedirect = () => {
    if (!addingToCart) {
      router.push(`/products/${item.id}`);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 700,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "anticipate" }}
        onClick={(e) => handleProductRedirect(e)}
        className=" flex flex-col justify-center items-center hover:cursor-pointer duration-300 border border-gray-100"
      >
        <div className="group relative duration-300 px-2 py-4">
          <img
            src={item.image}
            alt=""
            className="w-full h-40 md:h-50 lg:h-60 xl:h-80"
          />
          <div className="hidden absolute h-full w-full top-0 left-0 group-hover:flex justify-center items-center duration-300 bg-gray-100/40 z-40">
            {!addingToCart ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[200px] py-6 px-2 bg-gray-100 uppercase tracking-wide duration-300 hover:bg-black/90 hover:text-gray-100"
                onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  addToCart();
                }}
              >
                Add to Cart
              </motion.button>
            ) : (
              <button className="w-[200px] py-5 px-2 bg-secondary uppercase tracking-wide duration-300 flex justify-center items-center">
                <Cog8ToothIcon className="h-8 w-8 text-primary animate-spin" />
              </button>
            )}
          </div>
        </div>
        <div className="w-full px-2 pb-1 flex flex-row justify-between items-center font-Borui">
          <h1 className="font-semibold text-gray-700 text-sm">{item.brand}</h1>
          <span className="flex flex-row items-center space-x-2">
            <span className="text-sm md:text-md text-gray-600">
              {item.rating}
            </span>
            <StarIcon className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-2 pb-2 font-Gruppo font-semibold text-gray-700">
          <h1 className="text-sm md:text-lg">{item.title}</h1>
          <div className="flex flex-row space-x-2 items-center">
            <h1 className="text-sm md:text-lg">${item.price}</h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Product;
