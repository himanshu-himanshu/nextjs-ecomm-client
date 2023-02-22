import React from "react";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-row space-x-4 lg:space-x-8 uppercase tracking-wider text-sm font-light">
      <Link className="hover:cursor-pointer hover:text-gray-500" href="/">
        Home
      </Link>
      <Link
        className="hover:cursor-pointer hover:text-gray-500"
        href="/trending"
      >
        Trending
      </Link>
      <Link
        className="hover:cursor-pointer hover:text-gray-500"
        href="/all-products"
      >
        All Products
      </Link>
    </div>
  );
};

export default Links;
