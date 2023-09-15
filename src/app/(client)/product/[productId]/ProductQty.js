"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeOfCart,
  updateQuantity,
} from "../../globalRedux/features/cart/cartSlice";

const ProductQty = ({ item, key }) => {
  const [product, setProduct] = useState(item);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [qty, setQty] = useState(null);

  useEffect(() => {
    dispatch(updateQuantity(product));
  }, [product.quantity]);
  useEffect(() => {
    cartItems.map((product) => {
      if (product.id === item.id) {
        setQty(parseInt(product.quantity));
      }
    });
  }, []);
  useEffect(() => {
    if (qty === 0) {
      dispatch(removeOfCart(item));
    }
  }, [qty]);
  function decreaseQty() {
    dispatch(addToCart(item));
    if (qty <= 0) {
      setQty(0);
      setProduct({ ...product, quantity: 0 });
    } else {
      setQty(parseInt(qty) - 1);
    }
  }

  function increaseQty() {
    dispatch(addToCart(item));
    setQty(parseInt(qty) + 1);
    setProduct({ ...product, quantity: qty + 1 });
  }
  //
  function onChange(e) {
    const v = e.target.value;
    if (v <= 0) {
      setQty(0);
      setProduct({ ...product, quantity: 0 });
    } else if (v >= 100) {
      setQty(100);
      setProduct({ ...product, quantity: 100 });
    } else {
      setQty(v);
      setProduct({ ...product, quantity: v });
    }
  }

  // useEffect(() => {
  //   setQty(parseInt(item.quantity));
  // }, []);
  return (
    <div className="flex text-center items-center" key={key}>
      <button onClick={decreaseQty} className="mx-2">
        {" "}
        -{" "}
      </button>
      <input
        type="text"
        value={qty}
        onChange={(e) => onChange(e)}
        className="w-[40px] text-center text-gray-950"
      />
      <button onClick={increaseQty} className="mx-2">
        {" "}
        +{" "}
      </button>
    </div>
  );
};
export default ProductQty;
