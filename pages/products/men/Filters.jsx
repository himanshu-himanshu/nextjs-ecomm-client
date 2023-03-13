import React, { useState, useEffect } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Filters = ({ productsArray }) => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [brandsArray, setBrandsArray] = useState([]);

  useEffect(() => {
    let categories = productsArray.map((product) => product.category);
    setCategoriesArray(
      categories.filter((item, index, self) => self.indexOf(item) === index)
    );

    let brands = productsArray.map((product) => product.brand);
    setBrandsArray(
      brands.filter((item, index, self) => self.indexOf(item) === index)
    );
  }, [productsArray]);

  return (
    <div className="hidden h-full flex-col lg:flex w-1/5 py-12 px-4">
      <div className=" w-full p-2 mb-4">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Category
        </h1>
        {categoriesArray.map((category, index) => (
          <div
            className="w-full flex items-center flex-row space-x-2 py-1"
            key={index}
          >
            <input type="checkbox" />
            <span className="text-gray-800 font-Gruppo font-bold">
              {category}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full p-2 mb-4">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Brand
        </h1>
        {brandsArray.map((brand, index) => (
          <div
            className="w-full flex items-center flex-row space-x-2 py-1"
            key={index}
          >
            <input type="checkbox" />
            <span className="text-gray-800 font-Gruppo font-bold">{brand}</span>
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
        <div className="w-full flex items-center flex-row space-x-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          <span>& Up</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
