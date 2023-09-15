"use client";
import { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeOfCart,
  updateQuantity,
} from "../globalRedux/features/cart/cartSlice";

export default function Qty({ item }) {
  const [product, setProduct] = useState(item);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(null);
  useEffect(() => {
    dispatch(updateQuantity(product));
  }, [product]);
  useEffect(() => {
    if (qty === 0) {
      dispatch(removeOfCart(item));
    }
  }, [qty]);
  function decreaseQty() {
    if (qty <= 0) {
      setQty(0);
      setProduct({ ...product, quantity: 0 });
    } else {
      setQty(parseInt(qty) - 1);
      setProduct({ ...product, quantity: qty - 1 });
    }
  }

  function increaseQty() {
    setQty(parseInt(qty) + 1);
    setProduct({ ...product, quantity: qty + 1 });
  }

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

  useEffect(() => {
    setQty(parseInt(item.quantity));
  }, []);

  return (
    <div className="flex text-center items-center">
      <button onClick={decreaseQty} className="mx-2">
        {" "}
        -{" "}
      </button>
      <input
        type="text"
        value={qty}
        onChange={(e) => onChange(e)}
        className="w-[40px] text-center"
      />
      <button onClick={increaseQty} className="mx-2">
        {" "}
        +{" "}
      </button>
    </div>
  );
}
