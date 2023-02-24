import React, { useState, useEffect } from "react";

import Cart from "./Cart";
import Links from "./Links";
import MobileMenu from "./MobileMenu";
import OpenCart from "./OpenCart";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const handleOpenCart = () => {
    document.body.style.overflow = "hidden";
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    document.body.style.overflow = "unset";
    setOpenCart(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="w-full flex flex-row px-4 md:px-12 py-4 text-primary h-[10vh] z-40">
      <div className="hidden lg:flex items-center justify-start w-1/3">
        <Links />
      </div>
      <MobileMenu handleOpenMenu={handleOpenMenu} />
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
      <div className="flex items-center justify-center w-1/3">
        <div className="text-2xl md:text-4xl uppercase font-extrabold tracking-wider hover:cursor-pointer font-Borui p-2">
          <a href="/"> Grab.it</a>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center space-x-2 md:space-x-4 w-1/3">
        <div>
          <a href="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </a>
        </div>
        <Cart handleOpenCart={handleOpenCart} />
      </div>
      {openCart && (
        <OpenCart
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
        />
      )}
    </div>
  );
};

export default Navbar;
