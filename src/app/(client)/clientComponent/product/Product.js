import LazyImage from "../common/LazyImage";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToFavourite,
  removeOfFavourite,
} from "../../globalRedux/features/cart/cartSlice";
import { useEffect, useState } from "react";
import Rating from "../utils/Rating";
const Product = ({ item }) => {
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
  const addCartHandler = (event) => {
    dispatch(addToCart(event));
  };
  const addFavouriteHandler = (event) => {
    setFavourite(true);
    dispatch(addToFavourite(event));
  };
  const removeFavouriteHandler = (event) => {
    setFavourite(false);
    dispatch(removeOfFavourite(event));
  };
  useEffect(() => {
    if (item?.favourite) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [item]);
  return (
    <>
      <div className="max-w-2xl mx-auto p-2 ">
        <div className="relative min-h-[390px] bg-white hover:bg-slate-200 shadow-customShadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 ">
          <div className="absolute top-0 right-0 text-red-600">
            {!favourite ? (
              <button
                aria-label="Favourite"
                type="button"
                className="w-full p-2 "
                onClick={() => addFavouriteHandler(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-8 h-8 md:w-7 md:h-7 mr-1 ml-auto "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="w-full p-2"
                aria-label="removeFavourite"
                onClick={() => removeFavouriteHandler(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" w-8 h-8 md:w-7 md:h-7 mr-1 ml-auto "
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
            )}
          </div>
          <Link href={`/product/${item.id}`} className=" outline-none">
            <LazyImage
              className="rounded-t-lg p-4 outline-none"
              src={item.imageUrl}
              alt={item.title}
              width="300"
              height="300"
            />
          </Link>
          <div className="px-4 pb-4">
            <Link href={`/product/${item.id}`}>
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white gap-2.5">
                {item.title}
              </h3>
            </Link>
            <Rating item={item} />
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {item.price} $
              </span>
              <button
                type="button"
                aria-label="Add to cart"
                onClick={() => addCartHandler(item)}
                className="text-white flex items-center justify-center bg-bgBtn hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="px-1"> Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
