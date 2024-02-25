"use client";

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
  selectedCategoriesArray,
  selectedBrandsArray,
  setRatings,
  ratings,
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

  const handleRatingsSelection = (rating) => {
    setRatings((prevRating) => (prevRating === rating ? null : rating));
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
          className="absolute lg:hidden bg-secondary h-full  overflow-y-scroll top-0 left-0 w-[70%] sm:min-w-[350px] sm:w-[30%] overflow-hidden z-40 px-8 py-12"
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
            selectedCategoriesArray={selectedCategoriesArray}
            selectedBrandsArray={selectedBrandsArray}
            setRatings={setRatings}
            handleRatingsSelection={handleRatingsSelection}
            ratings={ratings}
          />
        </motion.div>
      )}
      {!isFiltersOpen && (
        <div className="sticky top-0 hidden h-full flex-col lg:flex w-1/5 py-12 px-4">
          <Body
            productsArray={productsArray}
            handleCategorySelection={handleCategorySelection}
            handleBrandSelection={handleBrandSelection}
            selectedCategoriesArray={selectedCategoriesArray}
            selectedBrandsArray={selectedBrandsArray}
            setRatings={setRatings}
            handleRatingsSelection={handleRatingsSelection}
            ratings={ratings}
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
  selectedBrandsArray,
  selectedCategoriesArray,
  handleRatingsSelection,
  ratings,
}) => {
  return (
    <>
      <div className="w-full p-2 mb-4">
        <h1 className="filterHeading">Category</h1>
        {productsArray
          .map((product) => product.category)
          .filter((category, index, self) => self.indexOf(category) === index)
          .map((category, index) => (
            <div className="checkboxDiv" key={index}>
              <label className="checkboxLabel">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCategorySelection(category);
                  }}
                  className="hover:cursor-pointer"
                  checked={selectedCategoriesArray?.includes(category)}
                />
                <span className="checkbox">{category}</span>
              </label>
            </div>
          ))}
      </div>

      <div className="w-full p-2 mb-4 border-t">
        <h1 className="filterHeading">Brand</h1>
        {productsArray
          .map((product) => product.brand)
          .filter((brand, index, self) => self.indexOf(brand) === index)
          .map((brand, index) => (
            <div className="checkboxDiv" key={index}>
              <label className="checkboxLabel">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleBrandSelection(brand);
                  }}
                  className="hover:cursor-pointer"
                  checked={selectedBrandsArray?.includes(brand)}
                />
                <span className="checkbox">{brand}</span>
              </label>
            </div>
          ))}
      </div>

      <div className="w-full p-2">
        <h1 className="filterHeading">Customer Rating</h1>
        <div className="w-full flex items-start flex-col space-y-3 py-2">
          {[1, 2, 3, 4].map((value) => (
            <label className="checkboxLabel">
              <input
                type="checkbox"
                onChange={() => {
                  handleRatingsSelection(value);
                }}
                checked={ratings == value}
                className="hover:cursor-pointer"
              />
              <div key={value} className="flex gap-1 hover:cursor-pointer">
                <StarRating number={value} />
                <span className="checkbox">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
