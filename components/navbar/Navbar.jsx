import React, { useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import OpenCart from "./OpenCart";
import OpenMenu from "./OpenMenu";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Men", href: "/products/men" },
    { text: "Women", href: "/products/women" },
  ];

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
    <div className="w-full flex flex-row px-4 md:px-12 py-4 lg:py-6 text-primary h-[10vh] z-40 border-b">
      <div className="hidden lg:flex items-center justify-start w-1/3">
        <div className="flex flex-row space-x-4 lg:space-x-8 uppercase tracking-wider text-sm font-light">
          {MENU_LIST.map((item, index) => (
            <Link
              className="hover:cursor-pointer hover:text-gray-500"
              href={item.href}
              passHref
              key={index}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <MobileMenu handleOpenMenu={handleOpenMenu} />
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
      <div className="flex items-center justify-center w-1/3">
        <div className="text-2xl md:text-4xl uppercase font-extrabold tracking-wider hover:cursor-pointer font-Borui p-2">
          <a href="/"> Grab.it</a>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center space-x-2 md:space-x-4 w-1/3">
        <Cart handleOpenCart={handleOpenCart} />
      </div>

      <AnimatePresence initial={false}>
        {openCart && (
          <OpenCart
            handleOpenCart={handleOpenCart}
            handleCloseCart={handleCloseCart}
            openCart={openCart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
