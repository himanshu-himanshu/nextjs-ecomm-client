import React, { useState } from "react";

import Cart from "./Cart";
import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Social from "./Social";
import OpenCart from "./OpenCart";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(true);

  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  console.log(openCart);
  return (
    <div className="flex flex-row px-5 md:px-8 py-6 bg-[#fffef9] text-[#113034] border">
      <div className="hidden lg:flex items-center justify-start w-1/3">
        <Links />
      </div>
      <MobileMenu />
      <div className="flex items-center justify-center w-1/3">
        <Logo />
      </div>
      <div className="flex flex-row justify-end items-center space-x-4 w-1/3">
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
