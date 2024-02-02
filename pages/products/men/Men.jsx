"use client";

import Product from "../../../components/product/Product";
import Filters from "./Filters";
import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Men = ({ productsArray }) => {
  const [filterInProcess, setFilterInProcess] = useState(false);
  const [unfilteredProductsArray, setUnfilteredProductsArray] = useState([]);
  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);

  useEffect(() => {
    if (selectedCategoriesArray.length > 0) {
      setFilterInProcess(true);
      const filteredProducts = productsArray.filter((product) =>
        selectedCategoriesArray.includes(product.category)
      );

      setTimeout(() => {
        setUnfilteredProductsArray(filteredProducts);
        setFilterInProcess(false);
      }, 500);
    } else {
      // Reset to all products if no categories are selected
      setUnfilteredProductsArray(productsArray);
    }
  }, [selectedCategoriesArray, productsArray]);

  return (
    <div className="h-full w-full py-12 px-6 border-t mt-4">
      <div className="h-full w-full flex justify-start p-4 px-6">
        <h1 className="text-5xl font-Gruppo uppercase">Men's</h1>
      </div>
      <div className="h-full w-full flex flex-row">
        <Filters
          productsArray={productsArray}
          selectedCategoriesArray={selectedCategoriesArray}
          setSelectedCategoriesArray={setSelectedCategoriesArray}
        />
        <div className="w-full lg:w-4/5 py-12 px-6">
          <div
            className={`text-black ${
              filterInProcess
                ? "w-full"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }`}
          >
            {filterInProcess && (
              <div className="h-full w-full flex justify-center items-center py-24">
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#113034113034"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
            {!filterInProcess &&
              unfilteredProductsArray.map((item) => (
                <Product item={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
