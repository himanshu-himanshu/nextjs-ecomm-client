"use client";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { StarIcon } from "@heroicons/react/24/solid";

const Filters = ({
  productsArray,
  setSelectedCategoriesArray,
  setSelectedBrandArray,
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
    <div className="sticky top-0 hidden h-full flex-col lg:flex w-1/5 py-12 px-4">
      <div className=" w-full p-2 mb-4">
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
    </div>
  );
};

const StarRating = ({ number }) => {
  return Array.from({ length: number }, (_, index) => (
    <StarIcon key={index} className="h-5 w-5 text-yellow-500" />
  ));
};

export default Filters;
