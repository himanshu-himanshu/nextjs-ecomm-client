import React from "react";
import Link from "next/link";

const PopularCategories = () => {
  return (
    <div className="h-full w-full p-2 md:p-4 lg:p-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-Gruppo uppercase">
          Popular Categories
        </h1>
      </div>
      <div className="h-[70vh] md:h-[90vh] lg:h-[70vh] w-full py-12 px-6">
        <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="h-full flex flex-col justify-center items-center bg-jacket bg-cover bg-center hover:cursor-pointer">
            <LinkButton title="Shop Jackets" />
          </div>
          <div className="h-full flex flex-col justify-center items-center bg-pant bg-cover bg-center">
            <LinkButton title="Shop Pants" />
          </div>
          <div className="h-full flex flex-col justify-center items-center bg-tshirt bg-cover bg-center">
            <LinkButton title="Shop TShirts" />
          </div>
          <div className="h-full flex flex-col justify-center items-center bg-shoe bg-cover bg-center">
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
      className="mt-6 font-bold px-4 md:px-8 py-3 md:py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-md md:text-lg lg:text-xl font-Gruppo tracking-wider hover:-translate-y-1 hover:shadow-2xl bg-secondary/80"
    >
      {title}
    </Link>
  );
};

export default PopularCategories;
