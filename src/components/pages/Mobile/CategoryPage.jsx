import { BiCategory } from "react-icons/bi";
import Loader from "../../ui/Loader/Loader";
import useFeach from "../../../hooks/useFeach";
import FeachCategories from "../../FeachData/FeachCategories";

function CategoryPage() {
  // fetch loading
  const { isLoading } = useFeach(
    "https://www.omidfaryabi.ir/nilva/category-test",
    ""
  );

  return (
    <>
      <div className="bg-neutral-100 rounded-b-3xl shadow-md mb-6 fixed top-0 left-0 right-0 z-10 py-4">
        <div className="container flex items-center gap-3 font-bold text-2xl ">
          <BiCategory />
          <span>دسته بندی</span>
        </div>
      </div>

      {/* loader and show categories */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center flex-col mt-20 pb-48 w-full ">
          <FeachCategories />
        </div>
      )}
    </>
  );
}

export default CategoryPage;
