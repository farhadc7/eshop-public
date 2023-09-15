"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllCart,
  removeOfCart,
} from "../../globalRedux/features/cart/cartSlice";
import LazyImage from "../common/LazyImage";
import Link from "next/link";
const CartDropdown = () => {
  const [totalCart, settotalCart] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    cartItems.forEach(function (item) {
      total += parseInt(item.price) * item.quantity;
    });
    settotalCart(total);
  }, [cartItems]);
  const removeOfCartHanlder = (event) => {
    dispatch(removeOfCart(event));
  };
  const deleteAllProHandler = () => {
    dispatch(deleteAllCart());
  };
  return (
    <>
      {cartItems.length != 0 ? (
        <div className="absolute top-9 right-0 bg-white w-72 rounded-lg shadow-2xl text-black hidden group-hover:block z-50">
          <div className="shopping-cart-header py-3 px-5">
            <div className="flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="main-color-text">${totalCart}</span>
            </div>
          </div>

          <div className="max-h-56 overflow-y-scroll overflow-x-hidden">
            <ul className=" p-2">
              {cartItems.map((item) => (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <li
                    key={item.id}
                    className="flex px-3 rounded-sm justify-between hover:bg-bgHeader hover:shadow-lg border-t-2  border-gray-300"
                  >
                    <div className="w-1/4">
                      <LazyImage
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full object-center object-cover md:block "
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="w-3/4">
                      <div className="flex justify-between my-1">
                        <h6>{item.title}</h6>
                        <span>Quantity : {item.quantity}</span>
                      </div>
                      <div className="flex justify-between my-1">
                        <span>price : {item.price}</span>
                        <svg
                          onClick={() => removeOfCartHanlder(item)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
              <button
                onClick={deleteAllProHandler}
                type="button"
                aria-label="Delete All"
                className="w-full mnx-auto  my-2 rounded-md text-center text-sm text-white bg-bgBtn py-2"
              >
                Delete All
              </button>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartDropdown;
