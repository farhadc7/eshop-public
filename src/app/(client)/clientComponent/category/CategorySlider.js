"use client";
import Slider from "react-slick";
import axios from "axios";
import CategoryBox from "./CategoryBox";
import { useEffect, useState } from "react";
// import { data } from "../../../db";




const CategorySlider = () => {
  // const categorys = await fecthData();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


const [data,setData]=useState([]);

const fetchData = () => {
   axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/v1/categories`)
    .then(response => {
      return response
    })
    .then(data => {
      setData(data.data)
    })
};

useEffect(() => {
   fetchData();

}, [])

  return (
    <Slider {...settings} className="category">
      {data.map((item) => (
        <div key={item.id} className="p-2">
          <CategoryBox item={item} />
        </div>
      ))}
    </Slider>
  );
};
export default CategorySlider;
// async function fecthData() {
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`);
//   return data;
// }
