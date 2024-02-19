import React from "react";
import Image from "next/image";
import Link from "next/link";

const GenderSection = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-5xl font-Gruppo uppercase">Popular brands</h1>
      </div>
      <div className="h-[60vh] w-full py-12 px-6">
        <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="h-full border flex flex-col justify-center items-center space-y-12 bg-men-section bg-cover bg-center grayscale-0">
            <Link
              className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/90"
              href="/products/men"
            >
              Shop Now
            </Link>
          </div>
          <div className="h-full border flex flex-col justify-center items-center space-y-12 bg-women-section bg-cover bg-center">
            <Link
              className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/90"
              href="/products/women"
            >
              Shop Now
            </Link>
          </div>
          <div className="h-full border flex flex-col justify-center items-center space-y-12 bg-men-section bg-cover bg-center grayscale-0">
            <Link
              className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/90"
              href="/products/men"
            >
              Shop Now
            </Link>
          </div>
          <div className="h-full border flex flex-col justify-center items-center space-y-12 bg-men-section bg-cover bg-center grayscale-0">
            <Link
              className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/90"
              href="/products/men"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSection;
