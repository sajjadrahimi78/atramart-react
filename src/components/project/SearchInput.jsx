import { BiSearch } from "react-icons/bi";
import User from "../ui/User/User";
import Cart from "../ui/Cart/Cart";
function SearchInput() {
  return (
    <div className="flex items-center gap-16 w-full">
      {/* input search */}
      <div className="flex flex-1 md:flex-grow-2 gap-x-2 items-center bg-neutral-100 md:bg-white py-1 px-2 rounded-xl shadow-sm w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="دنبال چی میگردی ؟"
          className="bg-neutral-100 md:bg-white md:flex flex-1 focus:outline-0 py-4 md:py-4 font-medium text-base lg:w-full"
        />
        <button className="md:bg-amber-500 md:p-3 md:text-white rounded-2xl">
          <BiSearch className="text-2xl" />
        </button>
      </div>
      {/* user & cart section */}
      <div className="hidden md:flex lg:hidden items-center gap-4 flex-row-reverse">
        <span>
          <User />
        </span>
        <span>
          <Cart />
        </span>
      </div>
    </div>
  );
}

export default SearchInput;
