import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-Borui">
            GRAB.IT
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-lg text-gray-500 sm:mb-0 dark:text-gray-400 font-Gruppo">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              All Products
            </a>
          </li>
          <li>
            <a href="/products/men" className="mr-4 hover:underline md:mr-6 ">
              Men
            </a>
          </li>
          <li>
            <a href="/products/women" className="hover:underline">
              Women
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-md tracking-wider text-gray-500 text-center dark:text-gray-400 font-Gruppo font-extrabold">
        <a href="https://flowbite.com/" className="hover:underline">
          GRAB.IT
        </a>{" "}
        © 2024 . All Rights Reserved.
      </span>
      <span className="block text-sm text-gray-500 text-center dark:text-gray-40 my-6 font-Gruppo">
        Designed & Developed by Himanshu with{" "}
        <span className="text-pink-500">&#9829;</span>
      </span>
    </footer>
  );
};

export default Footer;
