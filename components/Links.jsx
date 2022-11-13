import React from "react";

const Links = () => {
  return (
    <div className="flex flex-row space-x-4 lg:space-x-8 uppercase tracking-wider text-sm font-light">
      <span className="hover:cursor-pointer hover:text-gray-500">Home</span>
      <span className="hover:cursor-pointer hover:text-gray-500">Trending</span>
      <span className="hover:cursor-pointer hover:text-gray-500">
        All Products
      </span>
    </div>
  );
};

export default Links;
