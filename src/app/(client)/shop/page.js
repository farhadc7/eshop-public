"use client";

import { useSelector } from "react-redux";
import Product from "../clientComponent/product/Product";
import CategoryFilter from "./CategoryFilter";
import SliderFilter from "../clientComponent/utils/SliderFilter";
import axios from "axios";
import { data } from "../../db";
import { useEffect, useState } from "react";
const Store = () => {
  // const products = await fecthData();
  const [price, setPrice] = useState(null);
  const [list, setList] = useState(null);
  useEffect(() => {
    let lowest = Number.POSITIVE_INFINITY;
    let highest = Number.NEGATIVE_INFINITY;
    let tmp;
    for (var i = data?.product.length - 1; i >= 0; i--) {
      tmp = data?.product[i].price;
      if (tmp < lowest) lowest = tmp;
      if (tmp > highest) highest = tmp;
    }

    setPrice({ min: lowest, max: highest });
  }, []);

  return (
    <div className=" block md:flex py-10">
      <div className=" w-full md:w-1/5 mx-auto  max-w-2xl bg-white shadow-xl p-3 rounded-lg ">
        <h2>Price Range</h2>
        <br />
        {price && <SliderFilter />}
        <br />
        <h2>Category</h2>
        <CategoryFilter />
      </div>
      <div className=" w-full md:w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {data?.product?.map((item) => (
            <div key={item.id}>
              <Product item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Store;
// async function fecthData() {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/product`
//   );
//   return data;
// }
