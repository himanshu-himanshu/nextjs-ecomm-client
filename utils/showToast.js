// utils/toastUtils.js
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export const showToast = (message) => {
  toast.custom(
    <motion.div
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      style={{
        backgroundColor: "#113034",
        color: "#fffef9",
      }}
      className="px-6 py-6 font-Borui rounded-sm flex flex-row space-x-4 duration-300 z-20"
    >
      <span className="tracking-wider">{message}</span>
      <ShoppingBagIcon className="h-6 w-6 text-secondary" />
    </motion.div>
  );
};
