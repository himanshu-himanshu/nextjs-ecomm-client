import { motion } from "framer-motion";
import { BsCartX } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 10 }}
      className="flex flex-col items-center justify-center space-y-4"
    >
      <BsCartX className="text-6xl text-gray-500" />
      <h1 className="text-2xl md:text-3xl font-Gruppo tracking-tight text-primary flex justify-center items-center">
        Your cart is currently empty !
      </h1>
      <p className="font-Gruppo tracking-tight text-gray-600 text-lg max-w-sm text-center">
        Go ahead and explore top categories to make your choice.
      </p>
    </motion.div>
  );
};

export default EmptyCart;
