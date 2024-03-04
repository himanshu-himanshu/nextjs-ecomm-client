import Link from "next/link";
import { motion } from "framer-motion";

const GenderSection = () => {
  return (
    <div className="h-full w-full p-2 md:p-4 lg:p-6">
      <div className="h-full w-full flex justify-center py-6">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-Gruppo uppercase">
          Shop by Gender
        </h1>
      </div>
      <div className="h-[60vh] w-full py-12 px-6">
        <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h-full border flex justify-center items-center bg-men_section bg-cover bg-center"
          >
            <Link href={`/products/men`} passHref className="linkStyles">
              Shop Men's
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h-full border flex justify-center items-center bg-women_section bg-cover bg-center"
          >
            <Link href={`/products/women`} passHref className="linkStyles">
              Shop Women's
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GenderSection;
