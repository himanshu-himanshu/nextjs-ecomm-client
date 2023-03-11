import React, { useState, useEffect } from "react";

const Filters = ({ productsArray }) => {
  const [categoriesArray, setCategoriesArray] = useState([]);

  useEffect(() => {
    let categories = productsArray.map((product) => product.category);
    setCategoriesArray(
      categories.filter((item, index, self) => self.indexOf(item) === index)
    );
  }, [productsArray]);

  return (
    <div className="hidden h-full lg:flex w-1/5 py-12 px-4">
      <div className=" w-full">
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
    </div>
  );
};

export default Filters;
