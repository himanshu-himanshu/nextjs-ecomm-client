import { useSelector, useDispatch } from "react-redux";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Cart = ({ ...restProps }) => {
  const totalItems = useSelector((store) => store.cart.totalItems);
  return (
    <div className=" h-full flex items-center px-4">
      <a
        href="#"
        className="absolute"
        onClick={() => restProps.handleToggleCart()}
      >
        <ShoppingBagIcon className="h-6 w-6 text-primary" />
      </a>
      <span className="relative flex items-center justify-center top-2 -right-4 h-5 w-5 rounded-full bg-[#113034] text-white text-xs">
        {totalItems}
      </span>
    </div>
  );
};

export default Cart;
