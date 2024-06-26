import { useEffect, useState } from "react";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";
import FeachCategories from "../../FeachData/FeachCategories";
import { BiMobileAlt } from "react-icons/bi";
import { BsDiamondFill, BsLamp } from "react-icons/bs";

function Categories() {
  // state
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedApiCategory, setSelectedApiCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // handlers
  const handleCategoryClick = (id) => {
    setSelectedCategory(selectedCategory === id ? null : id);
  };

  const handleCategorySelect = (category) => {
    setSelectedApiCategory(category);
  };

  // feach data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.omidfaryabi.ir/nilva/category-test"
      );
      const result = await response.json();
      setCategories(result.data.categories);
      result.data.categories[0];
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen md:h-full lg:h-auto">
      {/* category */}
      <ul className="hidden md:flex md:flex-col lg:flex-row gap-6 font-bold lg:text-lg md:text-xl lg:text-gray-500 pb-1">
        <li
          onClick={() => handleCategoryClick(1)}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          className={`${
            selectedCategory === 1 ? "text-violet-500" : ""
          } flex flex-col items-center gap-1 lg:gap-2 lg:hover:text-violet-500 whitespace-nowrap cursor-pointer`}
        >
          <div className="flex items-center w-full">
            <span className="w-full">محصولات ما</span>
            <span
              className={`${
                selectedCategory === 1
                  ? "rotate-180 duration-200"
                  : "rotate-0 duration-200"
              } transition-all duration-200 lg:hover:rotate-180`}
            >
              <CgChevronDown />
            </span>
          </div>
          {/* open dropdown with hover */}
          {dropdownOpen && (
            <div className="lg:flex gap-2 absolute top-7 left-[-275px] right-[-205px] bg-white p-8 rounded-3xl z-50  shadow-lg transition-all duration-300 hidden">
              <div className="flex">
                {/* show categories in the right of dropdown */}
                <div className="w-1/7 flex flex-col">
                  <div className="flex flex-col flex-1">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        onMouseEnter={() => handleCategorySelect(category)}
                        className={`${
                          selectedApiCategory &&
                          selectedApiCategory.name === category.name
                            ? "text-violet-500"
                            : "text-black"
                        } flex gap-2 pb-4`}
                      >
                        <span className="text-3xl md:text-2xl">
                          {[category.name].includes("کالای دیجیتال") ? (
                            <BiMobileAlt />
                          ) : (
                            <BsLamp />
                          )}
                        </span>
                        <h3>{category.name}</h3>
                      </div>
                    ))}
                  </div>
                  <img src="/images/Metaverse.png" alt="" className="" />
                </div>
                <div className="h-full w-[1px] bg-neutral-200 mx-4"></div>
                {/* show subcategories and items in the left of dropdown */}
                <div className="">
                  <div className="flex-1 columns-3 xl:columns-4 2xl:columns-5 overflow-y-auto overflow-x-hidden">
                    {selectedApiCategory &&
                      selectedApiCategory.subcategories.map((subcategory) => (
                        <div key={subcategory.name} className="">
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm md:text-xs">
                                <BsDiamondFill />
                              </span>
                              <h4 className="text-violet-500 font-semibold font-sans w-fit">
                                {subcategory.name}
                              </h4>
                              <span>
                                <CgChevronLeft />
                              </span>
                            </div>

                            <ul className="pr-1 w-fit mt-1">
                              {subcategory.items.map((item) => (
                                <li key={item.name} className="py-1">
                                  <a
                                    href={item.link}
                                    className="text-gray-400 transition-all duration-300 scale-105 hover:text-violet-500 font-semibold text-base"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {/* img in the bottom left of dropdown */}
                    <div className="opacity-85">
                      <div className="absolute -bottom-5 -left-4 z-50">
                        <img src="/images/footer/Rectangle 341.png" alt="" />
                      </div>
                      <div className="absolute -bottom-5 -left-4 z-40">
                        <img src="/images/footer/Rectangle 340.png" alt="" />
                      </div>
                      <div className="absolute -bottom-5 -left-4 z-30">
                        <img src="/images/footer/Rectangle 339.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* show categories when click humberger icon */}
        {selectedCategory === 1 ? (
          <span className="w-full lg:hidden text-black cursor-pointer">
            <FeachCategories />
          </span>
        ) : (
          ""
        )}

        <li
          onClick={() => handleCategoryClick(2)}
          className={`${
            selectedCategory === 2 ? "text-violet-500" : ""
          } flex items-center gap-1 lg:gap-2 lg:hover:text-violet-500 whitespace-nowrap cursor-pointer`}
        >
          <span className="w-full">کیس اسمبل شده</span>
        </li>
        <li
          onClick={() => handleCategoryClick(3)}
          className={`${
            selectedCategory === 3 ? "text-violet-500" : ""
          } flex items-center gap-1 lg:gap-2 lg:hover:text-violet-500 whitespace-nowrap cursor-pointer`}
        >
          <span className="w-full">اسمبل آنلاین</span>
        </li>
        <li
          onClick={() => handleCategoryClick(4)}
          className={`${
            selectedCategory === 4 ? "text-violet-500" : ""
          } flex items-center gap-1 lg:gap-2 lg:hover:text-violet-500 whitespace-nowrap cursor-pointer`}
        >
          <span className="w-full">گیمینگ</span>
        </li>
        <li
          onClick={() => handleCategoryClick(5)}
          className={`${
            selectedCategory === 5 ? "text-violet-500" : ""
          } flex items-center gap-1 lg:gap-2 lg:hover:text-violet-500 whitespace-nowrap cursor-pointer`}
        >
          <span className="w-full">دست دوم</span>
          <span
            className={`${
              selectedCategory === 5
                ? "rotate-180 duration-200"
                : "rotate-0 duration-200"
            } transition-all duration-200 lg:hover:rotate-180`}
          >
            <CgChevronDown />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
