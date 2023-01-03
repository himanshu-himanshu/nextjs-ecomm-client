import React from "react";

import { products } from "../../utils/products";

const Trending = () => {
  return (
    <div className="h-full w-full py-12 px-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-5xl font-Gruppo uppercase">Trending Now</h1>
      </div>
      <div className="text-black grid grid-cols-2 gap-8 md:grid-cols-4 py-12 px-6">
        {products.map((item) => (
          <div className="group flex flex-col justify-center items-center hover:cursor-pointer duration-300">
            <div className="relative duration-300">
              <img src={item.image} alt="" className="w-full h-80" />
              <div className="hidden absolute h-full w-full top-0 left-0 group-hover:flex justify-center items-center duration-300 bg-gray-100/40">
                <button className="w-3/4 py-6 px-2 bg-red-100 bg-white/90 uppercase tracking-wide duration-300 hover:bg-black/90 hover:text-gray-100">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full p-2">
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
