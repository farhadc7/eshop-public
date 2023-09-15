"use client";

import BannerSlider from "./clientComponent/slider/BannerSlider";
import CategorySlider from "./clientComponent/category/CategorySlider";
import ChildBanner from "./clientComponent/banner/ChildBanner";
import ProductSlider from "./clientComponent/product/ProductSlider";
import SideBar from "./clientComponent/sidebar/SideBar";
import NavigateMobile from "./clientComponent/utils/NavigateMobile";
import LazyImage from "./clientComponent/common/LazyImage";
const ClientParent = ({ banner }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 my-5 md:my-10">
        <div className="col-span-5 sm:col-span-3 ">
          <BannerSlider banner={banner} />
        </div>
        <div className="col-span-5 sm:col-span-2">
          <ChildBanner />
        </div>
      </div>
      <div className="w-full">
        <CategorySlider />
      </div>
      <div className="grid grid-cols-8 gap-4 my-5 md:my-10  ">
        {/* <div className="col-span-8 md:col-span-2 md:sticky top-0 left-0 self-start ">
          <SideBar />
        </div> */}
        {/* <div className="col-span-8 md:col-span-6   ">
          <div className="my-3">
            <h2 className="text-xl font-bold px-3 pb-3">Deals of the Day</h2>
            <ProductSlider count={4} />
          </div>
          <div className="my-3">
            <h2 className="text-xl font-bold px-3 pb-3">Deals of the Day</h2>
            <ProductSlider count={4} />
          </div>
          <div className="my-3 cursor-pointer px-2">
            <LazyImage
              width="1000"
              height="300"
              alt="sidebar"
              className="mx-auto w-full rounded-md"
              src="/img/offer-ad.png"
            />
          </div>
          <div className="my-3">
            <h2 className="text-xl font-bold px-3 pb-3">Deals of the Day</h2>
            <ProductSlider count={4} />
          </div>
        </div> */}
      </div>
    </>
  );
};
export default ClientParent;
