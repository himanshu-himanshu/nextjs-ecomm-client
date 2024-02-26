import React from "react";

import { products } from "../../utils/products";
import Product from "../product/Product";

const Trending = ({ showTrending }) => {
  return (
    <div className="h-full w-full py-12 px-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-Gruppo uppercase">
          Trending Now
        </h1>
      </div>
      <div className="text-black grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-12 px-2 md:px-6">
        {products.map(
          (item) =>
            item.trending && (
              <Product item={item} key={item.id} showTrending={showTrending} />
            )
        )}
      </div>
    </div>
  );
};

export default Trending;
