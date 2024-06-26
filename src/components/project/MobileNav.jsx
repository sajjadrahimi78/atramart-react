import HomePage from "../pages/Mobile/HomePage";
import CategoryPage from "../pages/Mobile/CategoryPage";
import UserPage from "../pages/Mobile/UserPage";
import Supportpage from "../pages/Mobile/Supportpage";
import CartPage from "../pages/Mobile/CartPage";
import SearchPage from "../pages/Mobile/SearchPage";
import AppNav from "../Nav/AppNav/AppNav";
import { Route, Routes } from "react-router-dom";

function MobileNav() {
  return (
    <div className="md:hidden w-full">
      <div className=" ">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="support" element={<Supportpage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </div>

      <div className="">
        <AppNav />
      </div>
    </div>
  );
}

export default MobileNav;
