import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const GenderSection = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-5xl font-Gruppo uppercase">Shop by category</h1>
      </div>
      <div className="h-[60vh] w-full py-12 px-6">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h-full border flex flex-col justify-center items-center space-y-12 bg-men-section bg-cover bg-center grayscale-0"
          >
            <Link
              className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider hover:-translate-y-1 hover:shadow-2xl bg-secondary/90"
              href="/products/men"
            >
              Shop Men's
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h-full border flex flex-col justify-center items-center space-y-12 bg-women-section bg-cover bg-center"
          >
            <Link
              className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary duration-200 text-xl md:text-2xl font-Gruppo tracking-wider hover:-translate-y-1 hover:shadow-2xl bg-secondary/90"
              href="/products/women"
            >
              Shop Women's
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GenderSection;
