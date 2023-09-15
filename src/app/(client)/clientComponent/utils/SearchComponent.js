"use client";

import { useState } from "react";
import { data } from "../../../db";
import LazyImage from "../common/LazyImage";
import Link from "next/link";
const SearchComponent = () => {
  const [resault, setResault] = useState(null);
  const searchHandler = (e) => {
    if (e.target.value) {
      const filterData = data.product.filter(
        (item) => item.title == e.target.value
      );

      const filteredPersons = data.product.filter((product) => {
        return (
          product.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          product.desciption
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      });

      setResault(filteredPersons);
    } else {
      setResault(null);
    }
  };
  return (
    <form className="flex  flex-row gap-3 dark:text-white items-center ">
      <div className="flex w-3/4 justify-center ">
        <div className="w-full ">
          <div className="rounded-lg px-3 border-2 border-bgBtn bg-white relative">
            <div className="flex items-center  rounded-md ">
              <div className="pl-2">
                <svg
                  className="fill-current text-gray-950 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
              <input
                className="w-full rounded-md    bg-white text-gray-950 leading-tight focus:outline-none py-2 px-2"
                id="search"
                type="text"
                onChange={(e) => {
                  searchHandler(e);
                }}
                placeholder="Search product"
              />
            </div>
            <div className=" text-sm rounded-md absolute top-10 left-0 bg-white w-full block z-50">
              {resault &&
                resault.map((item) => (
                  <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="flex justify-between px-5 items-center hover:bg-gray-200"
                  >
                    <LazyImage
                      className="rounded-t-lg  outline-none"
                      src={item.imageUrl}
                      alt={item.title}
                      width="50"
                      height="50"
                    />
                    <h3 className="text-gray-900 px-4 font-semibold text-sm tracking-tight dark:text-white gap-2.5">
                      {item.title}
                    </h3>
                    <h6 className="text-gray-900 px-4 font-medium text-sm tracking-tight dark:text-white gap-2.5">
                      {item.price} $
                    </h6>
                    <Link href={`/product/${item.id}`}>
                      <button
                        type="button"
                        className="bg-bgBtn px-3 py-0.5 text-xs rounded-md"
                      >
                        Detail
                      </button>
                    </Link>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg w-1/4  dark:text-white bg-white border-2 border-bgBtn text-bgBtn px-2 md:px-3 py-0 md:py-1 tracking-wider">
        <select
          id="pricingType"
          name="pricingType"
          defaultValue={"All"}
          className="focus:outline-none dark:bg-white dark:text-gray-900 w-full  h-8 md:h-6  focus:border-sky-500 "
        >
          <option value="All">All</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>
    </form>
  );
};
export default SearchComponent;
