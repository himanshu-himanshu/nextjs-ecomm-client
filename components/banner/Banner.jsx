import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", damping: 12 }}
      className="relative w-full h-[90vh] z-10 font-Montserrat overflow-hidden bg-banner bg-center bg-cover"
    >
      <motion.div
        initial={{ x: 3000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 10, delay: 0.8 }}
        className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="container max-w-7xl mx-auto flex flex-col justify-center h-full px-4 md:px-8"
      >
        <p className="text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          <span className="font-Borui"> 30 % off</span>
        </p>
        <p className="text-gray-100 text-2xl font-Gruppo my-2">
          Grab the style that makes you confident with new winter sale!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 font-bold px-4 md:px-8 py-4 border border-secondary hover:bg-secondary text-primary text-xl md:text-2xl font-Gruppo tracking-wider w-[150px] md:w-[200px] hover:shadow-2xl bg-secondary/80"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
