import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/features/cart/cartSlice";
import { Toaster } from "react-hot-toast";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { showToast } from "../../utils/showToast";
import { ImSpinner10 } from "react-icons/im";
import { FaHotjar } from "react-icons/fa";

const Product = ({ item, showTrending }) => {
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
        className="relative group flex flex-col justify-center items-center hover:cursor-pointer duration-300 border border-gray-10"
      >
        {item.trending && showTrending && (
          <div className="absolute p-3 top-0 right-0 z-30 flex justify-center items-center">
            <FaHotjar className="text-xl text-orange-500" />
          </div>
        )}

        <div className="relative duration-300 px-2 py-4 w-full h-full">
          <div className="absolute h-full w-full top-0 left-0 z-10 group-hover:bg-gray-100/40 transition duration-200" />
          <img
            src={item.image}
            alt=""
            className="w-auto mx-auto h-[180px] sm:h-[220px] md:h-60 lg:h-60 xl:h-80 z-30"
          />
          <div className="hidden lg:absolute h-full w-full top-0 left-0 lg:group-hover:flex justify-center items-center z-30">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                addToCart();
              }}
              className="group w-[180px] xl:w-[210px] py-5 px-2 x:py-6 flex justify-center bg-gray-100 hover:bg-primary hover:text-gray-100 items-center overflow-hidden relative text-primary -- before:block before:absolute before:h-full before:w-full before:bg-primary before:left-0 before:bottom-0 duration-300 before:-translate-y-full hover:before:translate-y-0 before:transition-transform shadow-sm hover:shadow-lg"
            >
              <span className="relative max-h-[24px]">
                {!addingToCart ? (
                  <span className="uppercase tracking-wide text-[14px] md:text-[16px] font-Gruppo font-extrabold">
                    Add to Cart
                  </span>
                ) : (
                  <ImSpinner10 className="text-[28px] text-primary group-hover:text-secondary animate-spin" />
                )}
              </span>
            </button>
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
