import { BiCategory, BiHeadphone, BiHome, BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="app-nav bg-violet-500 flex items-center justify-between text-3xl text-[#15121D] py-3 px-5 rounded-3xl border-2 border-black shadow-[3.5px_4.5px_0px] fixed bottom-7 left-4 right-4  mobile-nav z-10">
      <NavLink to="" className="flex flex-col items-center gap-2 mt-0">
        <BiHome />
        <span className="text-xs">خانه</span>
      </NavLink>
      <NavLink to="category" className="flex flex-col items-center gap-2 mt-0">
        <BiCategory />
        <span className="text-xs">دسته بندی</span>
      </NavLink>
      <Link
        to="cart"
        className="bg-amber-500 p-3 mt-0 rounded-full border-2 border-black shadow-[1.5px_2.5px_0px] shadow-black"
      >
        <BsBag />
      </Link>
      <NavLink to="support" className="flex flex-col items-center gap-2 mt-0">
        <BiHeadphone />
        <span className="text-xs">پشتیبانی</span>
      </NavLink>
      <NavLink to="user" className="flex flex-col items-center gap-2 mt-0">
        <BiUser />
        <span className="text-xs">پروفایل</span>
      </NavLink>
    </nav>
  );
}

export default AppNav;
