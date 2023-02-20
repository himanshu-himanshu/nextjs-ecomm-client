import React from "react";

import { products } from "../../utils/products";
import Product from "../product/Product";

const Trending = () => {
  return (
    <div className="h-full w-full py-12 px-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-5xl font-Gruppo uppercase">Trending Now</h1>
      </div>
      <div className="text-black grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 py-12 px-6">
        {products.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
