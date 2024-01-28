import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <ShoppingCartIcon class="h-24 w-24 text-primary" />
      <h1 className="text-2xl md:text-3xl font-Gruppo tracking-tight text-primary flex justify-center items-center">
        Your cart is currently empty !
      </h1>
      <p className="font-Gruppo tracking-tight text-gray-600 text-lg max-w-sm text-center">
        Go ahead and explore top categories to make your choice.
      </p>
    </div>
  );
};

export default EmptyCart;
