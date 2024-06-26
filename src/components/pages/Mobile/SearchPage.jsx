import { CgClose } from "react-icons/cg";
import SearchInput from "../../project/SearchInput";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();

  return (
    <div className="container flex items-center gap-4 py-8">
      {/* search */}
      <div className="rounded-xl flex flex-1 bg-neutral-100">
        <SearchInput />
      </div>
      {/* close icon */}
      <div
        onClick={() => navigate("/")}
        className="p-5 rounded-xl bg-neutral-100 text-2xl"
      >
        <CgClose />
      </div>
    </div>
  );
}

export default SearchPage;
