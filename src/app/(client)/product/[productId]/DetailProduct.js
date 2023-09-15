"use client";
import SliderSingleProduct from "../../clientComponent/slider/SliderSingleProduct";
import Rating from "../../clientComponent/utils/Rating";
import ProductSlider from "../../clientComponent/product/ProductSlider";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavourite,
  getProducts,
  removeOfFavourite,
} from "../../globalRedux/features/cart/cartSlice";
import ProductQty from "./ProductQty";
import { useEffect, useState } from "react";
import CommentSlider from "../../clientComponent/comments/CommentSlider";
const DetailProduct = ({ data }) => {
  const dispatch = useDispatch();
  const [showQty, setShowQty] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {data ? (
        <div>
          <div className="antialiased  ">
            <div className="py-6">
              <div className=" mx-auto px-4 sm:px-6 md:px-3 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                  <div className="w-full md:w-1/2 px-4 p-5 bg-white rounded-sm md:mx-3 my-2 mx-auto ">
                    <SliderSingleProduct product={data} />
                  </div>
                  <div className="w-full md:w-1/2 px-4 bg-bgBtn shadow-lg rounded-sm py-5 text-white md:mx-3 my-2">
                    <h2 className="mb-2 borderDetail leading-tight tracking-tight py-3 font-medium text-xl md:text-2xl">
                      {data?.title}
                    </h2>

                    <div className="flex items-center text-yellow-500 md:px-0 py-3 borderDetail">
                      <h2 className="text-2xl font-medium ">price</h2>
                      <div className="px-5 text-2xl ">
                        {parseInt(data?.price) -
                          (parseInt(data?.price) * parseInt(data?.offer)) / 100}
                        $
                      </div>
                      <del className="text-xl mx-2">{data?.price}$</del>
                    </div>

                    <div className="flex items-center borderDetail">
                      <h2>Rate : </h2>
                      <span className="pt-2 px-4">
                        <Rating item={data} />
                      </span>
                    </div>

                    <p className=" py-5 ">
                      Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                      Vitae exercitationem porro saepe ea harum corrupti vero id
                      laudantium enim, libero blanditiis expedita cupiditate a
                      est.
                    </p>

                    <div className="flex py-4 space-x-4 ">
                      <button
                        type="button"
                        onClick={() => dispatch(addToCart(data))}
                        aria-label="Add to Cart"
                        className="h-10 block shadow-lg px-6 py-2 rounded-xl bg-yellow-500 hover:bg-gray-800 hover:text-white text-gray-950"
                      >
                        Add to Cart
                      </button>
                      {cartItems.map(
                        (pro) =>
                          pro.id === data.id && (
                            <ProductQty key={pro.id} item={data} />
                          )
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex itemms-center">
                        <p
                          onClick={() => dispatch(addToFavourite(data))}
                          className="text-xs leading-3 underline dark:text-white cursor-pointer"
                        >
                          Add to favorites
                        </p>
                        <p
                          onClick={() => dispatch(removeOfFavourite(data))}
                          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                        >
                          Remove
                        </p>
                      </div>
                    </div>

                    <div className="flex py-4 space-x-4 ">
                      <h6 className="font-medium text-md">Tages :</h6>
                      {data?.tag?.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="w-full">
            <h2 className="text-2xl font-bold py-3">comments</h2>
            <CommentSlider count={4} data={data?.comment} />
          </div>
          <br />
          <div className="w-full">
            <h2 className="text-2xl font-bold py-3">products</h2>
            <ProductSlider count={5} />
          </div>
          <br />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default DetailProduct;
