import Link from "next/link";
import Navbar from "./Navbar";
import SearchComponent from "../../utils/SearchComponent";
import LazyImage from "../../common/LazyImage";
import TopHeader from "./TopHeader";
import MenuBar from "./MenuBar";
import ProductQuantity from "../../utils/ProductQuantity";
import { useSelector } from "react-redux";
export default function Header() {
  // const language = useSelector((state) => state.language.value);

  return (
    <>
      <nav className="bg-bgHeader border-gray-200 shadow-lg dark:bg-[#4F709C] dark:text-white ">
        <TopHeader />

        <div className="md:max-w-custom px-5 md:px-0 py-1 mx:py-0 mx-auto ">
          <div className="grid grid-cols-12 w-full text-white text-sm  ">
            <div className="col-span-10 sm:col-span-2">
              <Link href="/" className="flex items-center w-full h-full">
                <LazyImage
                  src="/img/logo.svg"
                  className=" mx-2 itemDark"
                  alt="Flowbite Logo"
                  width="500"
                  height="500"
                />
              </Link>
            </div>
            <div className="col-span-2   md:hidden ">
              <MenuBar />
            </div>
            <div className="col-span-12 sm:col-span-10  ">
              <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-2">
                <div
                  id="mega-menu-icons"
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1   "
                >
                  <Navbar />
                </div>
              </div>
              <div
                className="md:flex block items-center md:order-2 w-full justify-end  py-1 border-t-2 	
border-gray-300"
              >
                <div className=" w-full md:w-3/5">
                  {" "}
                  <SearchComponent />
                </div>
                <div className="w-full md:w-2/5 hidden md:block"></div>
                <div className="w-full md:w-1/5">
                  <ProductQuantity />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
