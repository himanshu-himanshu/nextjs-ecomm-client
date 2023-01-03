import React from "react";
import Image from "next/image";
import imageSrc from "../../assets/banner-image.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] z-10 font-Montserrat overflow-hidden bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-center bg-cover">
      <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/70"></div>
      <div className="container max-w-7xl mx-auto flex flex-col justify-center h-full px-4 md:px-8">
        <p className="text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          <span className="font-Borui"> 30 % off</span>
        </p>
        <p className="text-gray-100 text-2xl font-Gruppo my-2">
          Grab the style that makes you confident with new winter sale!
        </p>
        <button className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:-translate-y-1 hover:shadow-2xl bg-secondary/80">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
