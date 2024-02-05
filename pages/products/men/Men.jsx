"use client";

import Product from "../../../components/product/Product";
import Filters from "./Filters";
import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Men = ({ productsArray }) => {
  const [filterInProcess, setFilterInProcess] = useState(false);
  const [noProductsFound, setNoProductsFound] = useState(false);
  const [unfilteredProductsArray, setUnfilteredProductsArray] = useState([]);
  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);
  const [selectedBrandArray, setSelectedBrandArray] = useState([]);

  useEffect(() => {
    if (selectedCategoriesArray.length > 0 || selectedBrandArray.length > 0) {
      setFilterInProcess(true);
      const filteredProducts = productsArray.filter(
        (product) =>
          (selectedCategoriesArray.length === 0 ||
            selectedCategoriesArray.includes(product.category)) &&
          (selectedBrandArray.length === 0 ||
            selectedBrandArray.includes(product.brand))
      );

      setTimeout(() => {
        if (filteredProducts.length === 0) {
          setNoProductsFound(true);
        } else {
          setUnfilteredProductsArray(filteredProducts);
          setNoProductsFound(false);
        }

        setFilterInProcess(false);
      }, 500);
    } else {
      // Reset to all products if no categories are selected
      setUnfilteredProductsArray(productsArray);
      setNoProductsFound(false);
    }
  }, [selectedCategoriesArray, productsArray, selectedBrandArray]);

  return (
    <div className="h-full w-full py-12 px-6 border-t mt-4">
      <div className="flex justify-start p-4 px-6">
        <h1 className="text-5xl font-Gruppo uppercase">Men's</h1>
      </div>
      <div className="flex flex-row">
        <Filters
          productsArray={productsArray}
          selectedCategoriesArray={selectedCategoriesArray}
          setSelectedCategoriesArray={setSelectedCategoriesArray}
          setSelectedBrandArray={setSelectedBrandArray}
        />
        <div className="w-full lg:w-4/5 py-12 px-6">
          <div
            className={`text-black ${
              filterInProcess || noProductsFound
                ? "w-full"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }`}
          >
            {filterInProcess && (
              <div className="flex justify-center items-center py-24">
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#113034113034"
                  radius="9"
                  ariaLabel="three-dots-loading"
                />
              </div>
            )}
            {!filterInProcess &&
              !noProductsFound &&
              unfilteredProductsArray.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            {!filterInProcess && noProductsFound && (
              <div className="flex justify-center items-center py-24 flex-col space-y-2 font-Gruppo text-gray-600">
                <FaceFrownIcon className="h-12 w-12 text-pink-300 mb-6" />
                <span>No Products found</span>
                <span>
                  Your search did not match any products. Please try again.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
