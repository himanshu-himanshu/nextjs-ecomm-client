import Product from "../../../components/product/Product";
import Filters from "./Filters";
import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Men = ({ productsArray }) => {
  const [filterInProcess, setFilterInProcess] = useState(false);

  const [unfilteredProductsArray, setUnfilteredProductsArray] = useState([]);

  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);

  useEffect(() => {
    setUnfilteredProductsArray(productsArray);
  }, []);

  const handleCategorySelectionParent = (category) => {
    setFilterInProcess(true);
    // const newSelectedCategories = selectedCategoriesArray.includes(category)
    //   ? selectedCategoriesArray.filter((b) => b !== category)
    //   : [...selectedCategoriesArray, category];

    // setSelectedCategoriesArray(newSelectedCategories);

    // const lol = selectedCategoriesArray.map((category) => {
    //   unfilteredProductsArray.filter((product) => product.category == category);
    // });
    const lol = productsArray.filter((product) => product.category == category);
    setTimeout(() => {
      setUnfilteredProductsArray(lol);
      setFilterInProcess(false);
    }, 500);

    console.log(lol);
  };

  return (
    <div className="h-full w-full py-12 px-6 border-t mt-4">
      <div className="h-full w-full flex justify-start p-4 px-6">
        <h1 className="text-5xl font-Gruppo uppercase">Men's</h1>
      </div>
      <div className="h-full w-full flex flex-row">
        <Filters
          productsArray={productsArray}
          handleCategorySelectionParent={handleCategorySelectionParent}
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
