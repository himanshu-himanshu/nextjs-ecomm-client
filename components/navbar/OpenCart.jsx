import React from "react";
import { motion } from "framer-motion";
import CloseButton from "../../utils/CloseButton";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import EmptyCart from "../EmptyCart";
import {
  updateQuantity,
  deleteItem,
} from "../../redux/features/cart/cartSlice";

const OpenCart = ({ handleCloseCart, handleOpenCart }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.cartItems);
  const totalAmount = useSelector((store) => store.cart.amount);

  const updateQuantityFunction = (id, type) => {
    dispatch(
      updateQuantity({
        id: id,
        type: type,
      })
    );
  };

  const handleDeleteItem = (id) => {
    dispatch(
      deleteItem({
        id: id,
      })
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        className="bg-gray-800 absolute w-full h-full top-0 left-0 overflow-hidden cursor-crosshair z-40"
        onClick={() => handleCloseCart()}
      ></motion.div>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        exit={{ x: 900, opacity: 0 }}
        className="absolute h-full bg-white top-0 right-0 w-full sm:min-w-[500px] sm:w-1/3 overflow-hidden z-40"
      >
        {/**  Cart header */}
        <div className="flex flex-row justify-between items-center px-6 py-6 h-[10vh] border-b">
          <Cart handleOpenCart={handleOpenCart} />

          <h1 className="font-Borui tracking-wide text-xl font-light">
            Your Cart
          </h1>
          <div onClick={() => handleCloseCart()}>
            <CloseButton />
          </div>
        </div>

        {/**  Div to render products inside the cart */}
        <div className="h-[90vh]">
          <div
            className={`flex flex-col ${
              items.length === 0 ? "h-full" : "h-[75%]"
            } justify-center items-center`}
          >
            {/** If there is no Item in cart render the div below */}
            {items.length === 0 && <EmptyCart />}

            {/** Render if there is anything added to the cart */}
            {items.length !== 0 && (
              <div className="w-full overflow-y-scroll p-2 cart_div h-full shadow-sm border-b">
                {items.map((item) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ duration: 0.1 }}
                    exit={{ opacity: 0 }}
                    className="group flex flex-row items-center duration-300 p-4 border-b border-gray-200"
                    key={item.id}
                  >
                    <div className="relative duration-300 w-1/3">
                      <img src={item.image} alt="" className="w-24 h-24" />
                    </div>
                    <div className="flex flex-col justify-between w-2/3 p-2 space-y-4">
                      <div className="flex flex-row justify-between items-center">
                        <h1 className="font-Gruppo font-extrabold text-lg">
                          {item.title}
                        </h1>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <h1 className="font-medium text-xl font-Gruppo">
                          ${item.price}
                        </h1>
                        <span className="flex flex-row items-center justify-center px-2 space-x-4 border">
                          <MinusIcon
                            className="h-4 w-4 text-gray-500 hover:cursor-pointer"
                            onClick={() =>
                              updateQuantityFunction(item.id, "DECREASE")
                            }
                          />
                          <span className="text-md font-Gruppo font-extrabold p-1 min-w-[30px] mx-auto text-center">
                            {item.quantity}
                          </span>
                          <PlusIcon
                            className="h-4 w-4 text-gray-500 hover:cursor-pointer"
                            onClick={() =>
                              updateQuantityFunction(item.id, "INCREASE")
                            }
                          />
                        </span>
                        <div>
                          <TrashIcon
                            className="h-6 w-6 text-pink-800 hover:cursor-pointer"
                            onClick={() => handleDeleteItem(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/*** Checkout div below only show if there is anything added to the cart */}
          {items.length !== 0 && (
            <div className="w-full h-[25%] p-4">
              <h1 className="text-[14px] tracking-wide flex justify-end items-end font-Gruppo mt-4 mb-6">
                <span>Shipping & taxes calculated at checkout</span>
              </h1>
              <div className="w-full font-bold uppercase px-6 py-5 bg-primary/90 border border-primary text-secondary hover:bg-primary hover:text-white duration-200 font-Gruppo flex justify-center items-center space-x-3 hover:cursor-pointer shadow-sm">
                <button className="text-lg tracking-wider uppercase">
                  Checkout
                </button>
                <CheckBadgeIcon className="h-5 w-5" />
                <span className="text-lg font-extrabold tracking-wider w-[120px] h-full">
                  ${totalAmount} CAD
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default OpenCart;
