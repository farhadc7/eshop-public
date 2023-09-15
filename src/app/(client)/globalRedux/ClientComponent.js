"use client";

import { useDispatch } from "react-redux";
import {
  cartData,
  getProducts,
  favouriteData,
} from "./features/cart/cartSlice";
import { useEffect } from "react";

const ClientComponent = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      let { cartItems } = JSON.parse(localStorage.getItem("cart"));

      dispatch(cartData(cartItems));
    }
    if (localStorage.getItem("favourite")) {
      let { favouriteItems } = JSON.parse(localStorage.getItem("favourite"));

      dispatch(favouriteData(favouriteItems));
    }
    // dispatch(getProducts());
  }, []);
  return <>{children}</>;
};
export default ClientComponent;
