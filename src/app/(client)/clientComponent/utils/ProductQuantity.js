"use client";
import Link from "next/link";
import CartDropdown from "../cart/CartDropdown";
import { useSelector } from "react-redux";
const ProductQuantity = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favouriteItems = useSelector((state) => state.cart.favouriteItems);

  return (
    <>
      <div className="flex justify-between md:justify-end md:order-2 mt-2 mt-md-5 md:mt-0">
        <Link
          href="/favourite"
          className="relative group text-white justify-center w-1/2 flex items-center mx-1"
        >
          <button
            type="button"
            aria-label="favouriteMenu"
            className="inline-flex w-full items-center  px-2 py-2 text-[12px] font-normal text-center md:text-white text-gray-900 text-md-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 md:bg-bgBtn hover:bg-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 md:w-5 md:h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span>favourite</span>
            <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {favouriteItems.length}
            </span>
          </button>
        </Link>

        <Link
          href="/cart"
          className="relative group text-white justify-center w-1/2 flex items-center mx-1"
        >
          <button
            type="button"
            aria-label="BasketUtil"
            className="inline-flex w-full items-center px-2 py-2 text-[12px] font-normal text-center text-gray-900  md:text-white text-md-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 md:bg-bgBtn hover:bg-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9  md:w-5 md:h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span> Basket</span>
            <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {cartItems.length}
            </span>
          </button>

          <CartDropdown />
        </Link>
      </div>
    </>
  );
};

export default ProductQuantity;
