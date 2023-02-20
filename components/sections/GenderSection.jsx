import React from "react";
import Image from "next/image";

const GenderSection = () => {
  return (
    <div className="h-[60vh] w-full py-12">
      <div className="h-full w-full flex flex-row justify-center space-x-2">
        <div className="h-full w-1/2 border flex flex-col justify-center items-center space-y-12 bg-gradient-to-l from-gray-100 to-gray-300">
          <h1 className="text-4xl">Men</h1>
          <button className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/80">
            Shop Now
          </button>
        </div>
        <div className="h-full w-1/2 border flex flex-col justify-center items-center space-y-12 bg-gradient-to-r from-gray-100 to-gray-300">
          <h1 className="text-4xl">Women</h1>
          <button className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/80">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderSection;
