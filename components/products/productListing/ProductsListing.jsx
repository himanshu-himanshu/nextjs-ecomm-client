"use client";

import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

import Product from "../../product/Product";
import Filters from "../filters/Filters";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const ProductsListing = ({ productsArray, gender }) => {
  const [filterInProcess, setFilterInProcess] = useState(false);
  const [noProductsFound, setNoProductsFound] = useState(false);
  const [unfilteredProductsArray, setUnfilteredProductsArray] = useState([]);
  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);
  const [selectedBrandArray, setSelectedBrandArray] = useState([]);
  const [ratings, setRatings] = useState();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  /**
   * USE EFFECT for checking if the window width is greater than large or not
   * IF YES -> then set the isFiltersOpen to false as it should not show mobile filters
   * IF NO -> then user can toggle between opening filters or not
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // Change the width as per your 'lg' breakpoint
    const handleScreenChange = () => {
      setIsFiltersOpen(!mediaQuery.matches ? false : ""); // Set isFiltersOpen to false when screen size is large
      document.body.style.overflow = "unset";
    };
    // Check initial screen size
    handleScreenChange();
    // Add event listener for screen size changes
    mediaQuery.addEventListener("change", handleScreenChange);
    // Clean up the event listener
    return () => mediaQuery.removeEventListener("change", handleScreenChange);
  }, []);

  /**
   * USE EFFECT for handling the filtering logic
   */
  useEffect(() => {
    const filterProducts = () => {
      if (
        selectedCategoriesArray.length > 0 ||
        selectedBrandArray.length > 0 ||
        ratings
      ) {
        setFilterInProcess(true);
        const filteredProducts = productsArray.filter(
          (product) =>
            (selectedCategoriesArray.length === 0 ||
              selectedCategoriesArray.includes(product.category)) &&
            (selectedBrandArray.length === 0 ||
              selectedBrandArray.includes(product.brand)) &&
            (!ratings || product.rating >= ratings)
        );
        scrollToTop();
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
        scrollToTop();
        setUnfilteredProductsArray(productsArray);
        setNoProductsFound(false);
      }
      scrollToTop();
    };

    filterProducts();
  }, [selectedCategoriesArray, productsArray, selectedBrandArray, ratings]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFiltersOpen = () => {
    document.body.style.overflow = "hidden";
    setIsFiltersOpen(true);
  };

  const handleFiltersClose = () => {
    document.body.style.overflow = "unset";
    setIsFiltersOpen(false);
  };

  const handleClearFilters = () => {
    setSelectedBrandArray([]);
    setSelectedCategoriesArray([]);
    setRatings(null);
  };

  return (
    <div className="h-full w-full py-6 lg:py-12 px-2 lg:px-6 mt-4">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row">
          <div className="flex lg:hidden mr-4">
            <button onClick={() => handleFiltersOpen()}>
              <AdjustmentsHorizontalIcon className="h-7 w-7 text-primary" />
            </button>
          </div>
          <h1 className="text-4xl lg:text-5xl font-Gruppo uppercase">
            {gender}
          </h1>
        </div>
        {(selectedCategoriesArray.length > 0 ||
          selectedBrandArray.length > 0 ||
          ratings) && (
          <button
            onClick={handleClearFilters}
            className="font-Gruppo text-red-600 p-1 sm:p-2 border-[0.5px] border-red-600 transition duration-300 hover:bg-red-600 hover:text-white"
          >
            Clear Filters
          </button>
        )}
      </div>
      <div className="flex flex-row">
        <Filters
          productsArray={productsArray}
          selectedCategoriesArray={selectedCategoriesArray}
          setSelectedCategoriesArray={setSelectedCategoriesArray}
          selectedBrandsArray={selectedBrandArray}
          setSelectedBrandArray={setSelectedBrandArray}
          isFiltersOpen={isFiltersOpen}
          handleFiltersClose={handleFiltersClose}
          setRatings={setRatings}
          ratings={ratings}
        />
        <div className="w-full lg:w-4/5 py-12 px-6">
          <div
            className={`text-black ${
              filterInProcess || noProductsFound
                ? "w-full"
                : "grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8"
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
                <Product item={item} key={item.id} showTrending={true} />
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

export default ProductsListing;
