import React, { useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
import OpenCart from "./OpenCart";
import OpenMenu from "./OpenMenu";
import { HiMenuAlt1 } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Men", href: "/products/men" },
    { text: "Women", href: "/products/women" },
  ];

  const handleToggleMenu = () => {
    const newState = !openMenu;
    setOpenMenu(newState);
    document.body.style.overflow = newState ? "hidden" : "unset";
  };

  const handleToggleCart = () => {
    const newState = !openCart;
    setOpenCart(newState);
    document.body.style.overflow = newState ? "hidden" : "unset";
  };

  return (
    <>
      <div className="hidden md:block bg-primary font-Gruppo w-full text-center uppercase text-secondary tracking-widest z-40">
        Free shipping over <b>$100</b> and free returns
      </div>
      <div className="w-full flex flex-row px-7 md:px-8 lg:px-12 py-4 lg:py-6 text-primary h-[10vh] z-40 border-b">
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

        {/*** MOBILE MENU HAMBURGER ICON BELOW */}
        <div
          className="lg:hidden flex items-center justify-start w-1/3 hover:cursor-pointer"
          onClick={() => handleToggleMenu()}
        >
          <HiMenuAlt1 className="text-3xl text-primary" />
        </div>

        {openMenu && <OpenMenu handleToggleMenu={handleToggleMenu} />}

        <div className="flex items-center justify-center w-1/3">
          <div className="text-2xl md:text-4xl uppercase font-extrabold tracking-wider hover:cursor-pointer font-Borui p-2">
            <a href="/"> Grab.it</a>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center space-x-2 md:space-x-4 w-1/3">
          <Cart handleToggleCart={handleToggleCart} />
        </div>

        <AnimatePresence initial={false}>
          {openCart && (
            <OpenCart handleToggleCart={handleToggleCart} openCart={openCart} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
