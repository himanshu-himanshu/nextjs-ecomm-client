import React, { useState, useEffect } from "react";

import { products } from "../../../utils/products";
import Product from "../../../components/product/Product";

const Men = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    setProductsArray(products.filter((product) => product.gender === "men"));
  }, []);

  return (
    <div className="h-full w-full py-12 px-6 border-t mt-4">
      <div className="h-full w-full flex justify-start p-4 px-6">
        <h1 className="text-5xl font-Gruppo uppercase">Men's</h1>
      </div>
      <div className="text-black grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 py-12 px-6">
        {productsArray.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Men;
