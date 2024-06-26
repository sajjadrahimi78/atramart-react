import toPersianNumbers from "../../utils/toPersianNumbers";
import HambergerIcon from "../ui/HambergerIcon/HambergerIcon";
import Logo from "../ui/Logo/Logo";
import { PiPhone } from "react-icons/pi";
import HeaderNav from "../Nav/HeaderNav/HeaderNav";

function HeaderInfo() {
  return (
    <div className="bg-neutral-100 w-full rounded-b-3xl shadow-md py-3 mb-8 hidden md:block">
      <div className="container flex items-center justify-between ">
        <div className="block lg:hidden">
          <HambergerIcon />
        </div>
        <div className="hidden lg:block">
          <HeaderCategory />
        </div>
        <div className="block lg:hidden">
          <Logo />
        </div>
        <div>
          <Phone />
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;

export function HeaderCategory() {
  return (
    <div className="">
      <HeaderNav />
    </div>
  );
}

function Phone() {
  return (
    <div className="flex items-center gap-3 ">
      <span className="font-semibold text-lg">
        {/* convert to Persian Number */}
        {toPersianNumbers("021-77602250")}
      </span>
      <div className="border-2 circle w-12 h-12 ">
        <PiPhone className="text-2xl" />
      </div>
    </div>
  );
}
