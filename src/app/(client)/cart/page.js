"use client";
import { useDispatch, useSelector } from "react-redux";
import Qty from "./Qty";
import LazyImage from "../clientComponent/common/LazyImage";
import {
  addToFavourite,
  removeOfCart,
} from "../globalRedux/features/cart/cartSlice";
import { useEffect, useState } from "react";
import Empty from "../clientComponent/utils/Empty";
import Link from "next/link";
export default function Cart() {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const [totalCart, settotalCart] = useState(0);
  const [quantityProdcut, setQuantityProdcut] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    cartItem.forEach(function (item) {
      total += parseInt(item.price) * item.quantity;
    });
    settotalCart(total);
  }, [cartItem]);
  const removeOfCartHanlder = (event) => {
    dispatch(removeOfCart(event));
  };
  const addToFavouriteHandler = (event) => {
    dispatch(addToFavourite(event));
  };

  useEffect(() => {
    let quantityNum = 0;
    cartItem.length > 0 &&
      cartItem.map((item) => {
        quantityNum += item.quantity;
      });
    setQuantityProdcut(quantityNum);
  }, [cartItem]);

  return (
    <>
      <title>Cart</title>
      {cartItem.length === 0 ? (
        <Empty />
      ) : (
        <div className=" bg-white shadow-lg rounded-md dark:bg-gray-900 bg-opacity-90 my-10  overflow-y-auto overflow-x-hidden ">
          <div
            className="w-full  z-10 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div
              className="flex items-start lg:flex-row flex-col justify-end"
              id="cart"
            >
              <div
                className="lg:w-3/4  w-full lg:px-8  md:px-6 px-4  py-4 bg-white dark:bg-gray-800 overflow-y-auto overflow-x-hidden  h-auto"
                id="scroll"
              >
                <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                    Back
                  </p>
                </div>
                <p className="lg:text-4xl mb-4  text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
                  Cart
                </p>
                {cartItem.map((item) => (
                  <div
                    key={item.id}
                    className="md:flex items-strech py-3 md:py-10 lg:py-3 border-t border-gray-100"
                  >
                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                      {" "}
                      <Link
                        href={`/product/${item.id}`}
                        key={item.id}
                        className="w-full"
                      >
                        <LazyImage
                          className="h-full object-center object-cover md:block hidden"
                          width="200"
                          height="200"
                          src={item.imageUrl}
                          alt={item.title}
                        />
                        <LazyImage
                          className="md:hidden w-full h-full object-center object-cover"
                          width="200"
                          height="200"
                          src={item.imageUrl}
                          alt={item.title}
                        />{" "}
                      </Link>
                    </div>

                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      {/* <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                      RF293
                    </p> */}
                      <div className="flex items-center justify-between w-full pt-1">
                        <div className="w-full md:w-5/6">
                          <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                            {item.title}
                          </p>
                        </div>
                        <div className="w-full md:w-1/6">
                          <Qty item={item} />
                        </div>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                        Height: 10 inches
                      </p>
                      <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                        Color: Black
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                        Composition: 100% calf leather
                      </p>
                      <div className="flex items-center justify-between pt-5">
                        <div className="flex itemms-center">
                          <p
                            onClick={() => addToFavouriteHandler(item)}
                            className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer"
                          >
                            Add to favorites
                          </p>
                          <p
                            onClick={() => removeOfCartHanlder(item)}
                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          >
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/4  w-full bg-white shadow-md  dark:bg-gray-900  md:sticky top-0 right-0 align-self">
                <div className="flex flex-col h-auto lg:px-8 md:px-7 px-4  py-6 justify-between overflow-y-auto">
                  <div>
                    <div className="flex items-center justify-between pt-16">
                      <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                        Total
                      </p>
                      <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                        {totalCart}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800 dark:text-white">
                        shipping cost
                      </p>
                      <p className="text-base leading-none text-gray-800 dark:text-white">
                        100$
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800 dark:text-white">
                        Number of products
                      </p>
                      <p className="text-base leading-none text-gray-800 dark:text-white">
                        {cartItem.length}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800 dark:text-white">
                        Quantity
                      </p>
                      <p className="text-base leading-none text-gray-800 dark:text-white">
                        {quantityProdcut}
                      </p>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                        Payable
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                        {totalCart + 100}
                      </p>
                    </div>
                    <button
                      className="text-base rounded-2xl shadow-md leading-none w-full py-5 bg-bgBtn  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                      aria-label="Checkout"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
