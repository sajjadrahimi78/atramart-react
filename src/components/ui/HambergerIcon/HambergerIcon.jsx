import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo/Logo";
import { GrClose } from "react-icons/gr";
import { HeaderCategory } from "../../project/HeaderInfo";
import Categories from "../Categories/Categories";

function HambergerIcon() {
  // state
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive ? (
        <div>
          <div className="text-2xl">
            <GiHamburgerMenu />
          </div>
          {/* backdrop */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="fixed inset-0 bg-black bg-opacity-25 z-20 opacity-100"
          ></div>

          {/* sidebar menu */}
          <div className="absolute top-0 right-0  transform w-[321.57px] h-[680px] overflow-auto bg-white  !rounded-bl-3xl opacity-100 scale-100 transition-all z-30">
            {/* sidebar header */}
            <div className="flex items-center p-4 border-b-2 sticky top-0 left-0 bg-white z-20">
              <span className="flex flex-1 cursor-pointer">
                <Logo />
              </span>

              <button
                onClick={() => setIsActive(!isActive)}
                className="bg-black text-white p-1 text-xl font-bold rounded-lg"
              >
                <GrClose />
              </button>
            </div>

            <ul className="mt-4 pb-4 border-b-2 px-4">
              <HeaderCategory />
            </ul>

            <div className="mt-4 pb-36 px-4">
              <Categories />
            </div>

            {/* sidebar footer */}
            <div className="sticky bottom-0 left-0 right-0">
              <MiniSidebarFooterImg />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsActive(!isActive)}
          className="text-2xl cursor-pointer"
        >
          <GiHamburgerMenu />
        </div>
      )}
    </div>
  );
}

export default HambergerIcon;

function MiniSidebarFooterImg() {
  return (
    <div className="relative bottom-0 left-0 right-0">
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#8b5cf6"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,186.7C560,192,640,128,720,128C800,128,880,192,960,197.3C1040,203,1120,149,1200,149.3C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f59e0b"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,186.7C560,192,640,128,720,128C800,128,880,192,960,197.3C1040,203,1120,149,1200,149.3C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-30 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ef4444"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,186.7C560,192,640,128,720,128C800,128,880,192,960,197.3C1040,203,1120,149,1200,149.3C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
