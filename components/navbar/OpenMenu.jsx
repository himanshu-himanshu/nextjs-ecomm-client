import { motion } from "framer-motion";
import React from "react";
import CloseButton from "../../utils/CloseButton";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";

const OpenMenu = ({ handleToggleMenu }) => {
  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Men", href: "/products/men" },
    { text: "Women", href: "/products/women" },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-800 lg:hidden absolute w-full h-full top-0 left-0 overflow-hidden cursor-crosshair z-20"
        onClick={() => handleToggleMenu()}
      ></motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute h-full bg-secondary top-0 left-0 sm:min-w-[500px] w-full sm:w-1/3 overflow-hidden z-40"
      >
        <div className="flex flex-col px-6 py-6 h-full">
          <div className="flex flex-row w-full py-4 items-center justify-between">
            <div className="flex items-center justify-center w-1/3">
              <div className="text-2xl uppercase font-extrabold tracking-wider hover:cursor-pointer font-Borui p-2">
                <a href="/"> Grab.it</a>
              </div>
            </div>
            <div
              onClick={() => handleToggleMenu()}
              className="flex justify-end hover:cursor-pointer bg-secondary p-2 mr-3 rounded-full text-primary border"
            >
              <CloseButton />
            </div>
          </div>

          <div className="w-full h-full py-12 px-3 flex items-center">
            <ul className="w-full flex flex-col justify-center items-center space-y-6 font-Gruppo">
              {MENU_LIST.map((item, index) => (
                <Link
                  className="border border-primary/90 bg-primary/90 text-2xl tracking-wider font-extrabold text-secondary w-full text-center py-4 hover:border-primary hover:bg-primary hover:text-secondary duration-200 hover:cursor-pointer"
                  href={item.href}
                  passHref
                  key={index}
                >
                  {item.text}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-6 justify-center items-center">
            <span className="font-Gruppo">
              Designed & Developed by Himanshu with{" "}
              <span className="text-pink-500">&#9829;</span>
            </span>
            <div className="flex flex-row space-x-6">
              <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer duration-200" />
              <FaGithubSquare className="text-2xl hover:text-gray-800 cursor-pointer duration-200" />
              <GiFlowerEmblem className="text-2xl hover:text-yellow-600 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OpenMenu;
