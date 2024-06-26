import { useState } from "react";
import useFeach from "../../hooks/useFeach";
import Loader from "../ui/Loader/Loader";
import { BiMobileAlt } from "react-icons/bi";
import { BsDiamondFill, BsLamp } from "react-icons/bs";
import { CgChevronDown } from "react-icons/cg";
import { Link } from "react-router-dom";

function FeachCategories() {
  // state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // handlers
  const handleCategoryClick = (category) => {
    if (selectedCategory === category.name) {
      setSelectedCategory(null); // بستن زیرمجموعه‌ها در صورت کلیک مجدد
    } else {
      setSelectedCategory(category.name);
    }
  };

  const handleSubCategoryClick = (subcategory) => {
    if (selectedSubCategory === subcategory.name) {
      setSelectedSubCategory(null); // بستن زیرمجموعه‌ها در صورت کلیک مجدد
    } else {
      setSelectedSubCategory(subcategory.name);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // fetch data
  const { data, isLoading } = useFeach(
    "https://www.omidfaryabi.ir/nilva/category-test",
    ""
  );

  // show loader 
  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full md:bg-gray-100 lg:bg-white md:py-2 lg:py-0 md:mt-2 lg:mt-0">
      {data.data.categories.map((category) => {
        return (
          <>
            {/* show categories */}
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category)}
              onMouseEnter={() => handleCategorySelect(category)}
              className={`${
                selectedCategory &&
                selectedCategory === category.name &&
                "border-b-violet-500 text-violet-500"
              } flex py-4 md:py-2 border-b-2 md:border-b-0 cursor-pointer`}
            >
              <div className="flex text-xl md:text-base lg:text-xl font-semibold gap-2 flex-1">
                <span className="text-3xl md:text-2xl">
                  {[category.name].includes("کالای دیجیتال") ? (
                    <BiMobileAlt />
                  ) : (
                    <BsLamp />
                  )}
                </span>
                <h3>{category.name}</h3>
              </div>
              <span
                className={`${
                  selectedCategory === category.name
                    ? "rotate-180 duration-200"
                    : "rotate-0 duration-200"
                } text-3xl md:text-2xl lg:hidden`}
              >
                <CgChevronDown />
              </span>
            </div>
            {selectedCategory === category.name && (
              <div className="flex items-center w-full flex-col ">
                <ul className="w-full">
                  {category.subcategories.map((subcategory, index) => {
                    return (
                      <>
                        {/* show subcategories */}
                        <div
                          key={index}
                          onClick={() => handleSubCategoryClick(subcategory)}
                          className={`${
                            selectedSubCategory === subcategory.name &&
                            "border-b-violet-500 text-violet-500"
                          } flex py-4 md:py-2 border-b md:border-b-0 cursor-pointer`}
                        >
                          <li className="flex flex-1 items-center gap-2 px-2 text-lg md:text-base font-semibold">
                            <span className="text-sm md:text-xs">
                              <BsDiamondFill />
                            </span>
                            <h3>{subcategory.name}</h3>
                          </li>
                          <span
                            className={`${
                              selectedSubCategory === subcategory.name
                                ? "rotate-180 duration-200"
                                : "rotate-0 duration-200"
                            } text-3xl md:text-2xl lg:hidden`}
                          >
                            <CgChevronDown />
                          </span>
                        </div>

                        {selectedSubCategory === subcategory.name && (
                          <div className="fflex items-center w-full flex-col">
                            {subcategory.items.map((item, index) => {
                              return (
                                // show subcategory's item
                                <div
                                  key={index}
                                  className="py-2 px-4 font-semibold text-lg md:text-base text-gray-500"
                                >
                                  <Link to={item.link}>{item.name}</Link>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default FeachCategories;
