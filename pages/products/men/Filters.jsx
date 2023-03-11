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

      <div className="w-full p-2">
        <h1 className="text-lg font-Borui font-light text-gray-700 mb-4">
          Price
        </h1>
        <div className="w-full flex items-center flex-row space-x-2 py-1">
          <Slider min={0} max={1000} className="" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
