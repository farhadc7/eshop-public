"use client";
import { useSelector } from "react-redux";
import Product from "../clientComponent/product/Product";
import Empty from "../clientComponent/utils/Empty";
const FavouritePage = () => {
  const favouriteItems = useSelector((state) => state.cart.favouriteItems);

  return (
    <>
      {favouriteItems.length === 0 ? (
        <Empty />
      ) : (
        <div className="col-span-8 my-5 md:col-span-6   ">
          <div className="my-3">
            <h2 className="text-2xl font-bold  pb-3">Favourite</h2>
            <div className="flex flex-col flex-wrap md:flex-row -mx-4">
              {favouriteItems.map((item) => (
                <div className="md:w-3/12 2xl:w-1/5 w-full" key={item.id}>
                  <Product item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavouritePage;
