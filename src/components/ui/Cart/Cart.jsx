import { BiShoppingBag } from "react-icons/bi";
import toPersianNumbers from "../../../utils/toPersianNumbers";

function Cart() {
  return (
    <div className="border-2 circle w-12 h-12 relative cursor-pointer">
      <BiShoppingBag className="text-2xl" />
      <span className="border circle w-4 h-4 p-3  bg-violet-500 text-white absolute -bottom-5 text-base flex items-center justify-center z-10">
        {toPersianNumbers(2)}
      </span>
    </div>
  );
}

export default Cart;
