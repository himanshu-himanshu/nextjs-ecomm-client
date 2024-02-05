import { motion } from "framer-motion";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const CustomToast = () => {
  return (
    <motion.div
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      className="px-6 py-6 bg-primary text-secondary font-Borui rounded-sm flex flex-row space-x-4 duration-300 z-40"
    >
      <span className="tracking-wider"> Item added to cart</span>
      <ShoppingBagIcon className="h-6 w-6 text-secondary" />
    </motion.div>
  );
};

export default CustomToast;
