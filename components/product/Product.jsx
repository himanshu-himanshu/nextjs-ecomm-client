import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  calculateTotalItemsQuantity,
} from "../../redux/features/cart/cartSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col justify-center items-center hover:cursor-pointer duration-300 border border-gray-100/70 rounded-sm">
      <div className="group relative duration-300 px-2 py-4">
        <img src={item.image} alt="" className="w-full h-80" />
        <div className="hidden absolute h-full w-full top-0 left-0 group-hover:flex justify-center items-center duration-300 bg-gray-100/40">
          <button
            className="w-[200px] py-6 px-2 bg-gray-100 uppercase tracking-wide duration-300 hover:bg-black/90 hover:text-gray-100"
            onClick={() => {
              dispatch(addItemToCart(item));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-full px-2 pb-1 flex flex-row justify-between items-center">
        <h1 className="font-semibold text-gray-700 text-sm">{item.brand}</h1>
        <span className="flex flex-row items-center space-x-2">
          <span className="text-gray-600">{item.rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
