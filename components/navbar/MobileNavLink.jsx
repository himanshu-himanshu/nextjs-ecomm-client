import React from "react";
import { motion } from "framer-motion";

const MobileNavLink = ({ title }) => {
  return (
    <motion.li
      className="text-xl tracking-wider font-bold text-primary w-full text-center py-4 hover:border-primary hover:bg-primary hover:text-secondary duration-200 hover:cursor-pointer"
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {title}
    </motion.li>
  );
};

export default MobileNavLink;
