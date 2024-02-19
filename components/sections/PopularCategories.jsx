import React from "react";
import Link from "next/link";

const PopularCategories = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-5xl font-Gruppo uppercase">Popular Categories</h1>
      </div>
      <div className="h-[60vh] w-full py-12 px-6">
        <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-full flex flex-col justify-center items-center space-y-12 bg-jacket bg-cover bg-center hover:cursor-pointer">
            <LinkButton title="Shop Jackets" />
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-12 bg-pant bg-cover bg-center">
            <LinkButton title="Shop Pants" />
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-12 bg-tshirt bg-cover bg-center">
            <LinkButton title="Shop TShirts" />
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-12 bg-shoe bg-cover bg-center">
            <LinkButton title="Shop Shoes" />
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkButton = ({ title }) => {
  return (
    <Link
      href={`/products/women`}
      passHref
      className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider hover:-translate-y-1 hover:shadow-2xl bg-secondary/80"
    >
      {title}
    </Link>
  );
};

export default PopularCategories;
