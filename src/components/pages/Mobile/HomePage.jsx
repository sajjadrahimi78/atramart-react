import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import HambergerIcon from "../../ui/HambergerIcon/HambergerIcon";

function HomePage() {
  return (
    <div className="container flex items-center gap-8 py-8">
      {/* search box */}
      <div className="p-4 rounded-xl flex flex-1 bg-neutral-100">
        <Link to="search" className="flex flex-1 mt-0 py-2">
          <span>جستجو در &nbsp;</span>
          <span className="text-amber-500"> آترامارت </span>
        </Link>
        <button className="md:bg-amber-500 md:p-3 md:text-white rounded-2xl">
          <BiSearch className="text-2xl font-bold" />
        </button>
      </div>
      {/* Hamburger icon */}
      <div className="p-6 rounded-xl bg-neutral-100">
        <HambergerIcon />
      </div>
    </div>
  );
}

export default HomePage;
