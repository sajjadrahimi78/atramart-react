import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <ul className="hidden md:flex md:flex-col lg:flex-row gap-6 font-bold text-lg text-gray-500 pb-1">
      <li>
        <NavLink to="buyInstallments">خرید اقساطی</NavLink>
      </li>
      <li>
        <NavLink to="organizationalSales">فروش سازمانی</NavLink>
      </li>
      <li>
        <NavLink to="atraMagazine">مجله آترا</NavLink>
      </li>
      <li>
        <NavLink to="aboutUs">درباره ما</NavLink>
      </li>
    </ul>
  );
}

export default HeaderNav;
