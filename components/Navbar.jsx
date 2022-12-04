import React, { useState, useEffect } from "react";

import Cart from "./Cart";
import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Social from "./Social";
import OpenCart from "./OpenCart";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="flex flex-row px-4 md:px-8 py-4 bg-secondary text-primary border">
      <div className="hidden lg:flex items-center justify-start w-1/3">
        <Links />
      </div>
      <MobileMenu handleOpenMenu={handleOpenMenu} />
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
      <div className="flex items-center justify-center w-1/3">
        <Logo />
      </div>
      <div className="flex flex-row justify-end items-center space-x-2 md:space-x-4 w-1/3">
        <Social />
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
