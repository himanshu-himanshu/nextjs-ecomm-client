"use client";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import CloseButton from "../../../utils/CloseButton";

const Filters = ({
  productsArray,
  setSelectedCategoriesArray,
  setSelectedBrandArray,
  isFiltersOpen,
  handleFiltersClose,
}) => {
  const handleCategorySelection = (category) => {
    setSelectedCategoriesArray((prevBrands) => {
      if (prevBrands.includes(category)) {
        return prevBrands.filter((b) => b !== category);
      } else {
        return [...prevBrands, category];
      }
    });
  };

  const handleBrandSelection = (brand) => {
    setSelectedBrandArray((prevBrands) => {
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((b) => b !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  };

  return (
    <>
      {isFiltersOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-800/70 absolute lg:hidden w-full h-full top-0 left-0 overflow-y-hidden cursor-crosshair z-40"
          onClick={() => handleFiltersClose()}
        />
      )}
      {isFiltersOpen && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.4 }}
          whileInView={true}
          className={`filters_mobile`}
        >
          <div className="flex flex-row justify-between items-center pb-6 font-extralight">
            <h1 className="text-2xl uppercase font-Borui font-light text-gray-700">
              Filters
            </h1>
            <div onClick={() => handleFiltersClose()}>
              <CloseButton />
            </div>
          </div>
          <hr />
          <Body
            productsArray={productsArray}
            handleCategorySelection={handleCategorySelection}
            handleBrandSelection={handleBrandSelection}
          />
        </motion.div>
      )}
      {!isFiltersOpen && (
        <div className={`filters`}>
          <Body
            productsArray={productsArray}
            handleCategorySelection={handleCategorySelection}
            handleBrandSelection={handleBrandSelection}
          />
        </div>
      )}
    </>
  );
};

const StarRating = ({ number }) => {
  return Array.from({ length: number }, (_, index) => (
    <StarIcon key={index} className="h-5 w-5 text-yellow-500" />
  ));
};

const Body = ({
  productsArray,
  handleBrandSelection,
  handleCategorySelection,
}) => {
  return (
    <>
      <div className="w-full p-2 mb-4">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Category
        </h1>
        {productsArray
          .map((product) => product.category)
          .filter((category, index, self) => self.indexOf(category) === index)
          .map((category, index) => (
            <div
              className="w-full flex items-center flex-row space-x-2 py-1"
              key={index}
            >
              <label className="hover:cursor-pointer flex flex-row space-x-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCategorySelection(category);
                  }}
                  className="hover:cursor-pointer"
                />
                <span className="text-gray-800 font-Gruppo font-bold">
                  {category}
                </span>
              </label>
            </div>
          ))}
      </div>

      <div className="w-full p-2 mb-4 border-t">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Brand
        </h1>
        {productsArray
          .map((product) => product.brand)
          .filter((brand, index, self) => self.indexOf(brand) === index)
          .map((brand, index) => (
            <div
              className="w-full flex items-center flex-row space-x-2 py-1"
              key={index}
            >
              <label className="hover:cursor-pointer flex flex-row space-x-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleBrandSelection(brand);
                  }}
                  className="hover:cursor-pointer"
                />
                <span className="text-gray-800 font-Gruppo font-bold">
                  {brand}
                </span>
              </label>
            </div>
          ))}
      </div>

      <div className="w-full p-2 mb-12">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Price
        </h1>
        <div className="w-full flex items-center flex-row space-x-2 py-1">
          <Slider min={0} max={1000} className="" />
        </div>
      </div>

      <div className="w-full p-2">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Customer Rating
        </h1>
        <div className="w-full flex items-start flex-col space-y-3 py-2">
          {[1, 2, 3, 4].map((value) => (
            <div key={value} className="flex gap-1 hover:cursor-pointer">
              <StarRating number={value} />
              <span className="text-gray-500 font-Gruppo font-bold">& Up</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
