import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  calculateTotalItemsQuantity,
} from "../../redux/features/cart/cartSlice";
import ReactStars from "react-stars";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  console.log(item);
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
        <span>
          <ReactStars
            count={5}
            size={14}
            color={"#ffd700"}
            edit={false}
            value={item.rating}
            isHalf={true}
          />
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
