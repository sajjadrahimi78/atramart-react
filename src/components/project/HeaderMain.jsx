import Cart from "../ui/Cart/Cart";
import Categories from "../ui/Categories/Categories";
import Country from "../ui/Country/Country";
import Logo from "../ui/Logo/Logo";
import User from "../ui/User/User";

function HeaderMain() {
  return (
    <div className="flex pb-8 items-center gap-4 xl:gap-12 w-full relative">
      <div>
        <Logo />
      </div>
      <div className="flex flex-1 relative">
        <Categories />
      </div>
      <div className="flex items-center gap-4 flex-row-reverse">
        <span>
          <User />
        </span>
        <span>
          <Cart />
        </span>
        <span className="border border-gray-500 h-10 "></span>
        <span>
          <Country />
        </span>
      </div>
    </div>
  );
}

export default HeaderMain;
