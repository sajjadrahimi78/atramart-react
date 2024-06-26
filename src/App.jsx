import MobileNav from "./components/project/MobileNav";
import SearchInput from "./components/project/SearchInput";
import HeaderInfo from "./components/project/HeaderInfo";
import HeaderMain from "./components/project/HeaderMain";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="md:bg-rose-50 h-screen ">
      <Toaster />
      
      <div className=" hidden md:flex">
        <HeaderInfo />
      </div>
      <div className="container hidden lg:flex">
        <HeaderMain />
      </div>

      <div className="container hidden md:flex ">
        <SearchInput />
      </div>

      <div className="container flex md:hidden ">
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
