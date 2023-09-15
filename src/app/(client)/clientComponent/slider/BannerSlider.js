import LazyImage from "../common/LazyImage";
import Link from "next/link";
import Slider from "react-slick";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../constants/constants";
import useSWR from "swr";
// import {data} from  "../../../db"
// const fetcher = (path) =>
//   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${path}`).then((res) => res.json());
//   const { data, error, isLoading } = useSWR("api/landing-page/v1/get-headers", fetcher);
const BannerSlider =  () => {
   

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [data,setData]=useState([]);

  const fetchData = () => {
    axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page/v1/get-headers`
    )
      .then(response => {
        return response
      })
      .then(data => {
        setData(data.data)
      })
  };

  useEffect(() => {
     fetchData();
     console.log(data);

  }, [])


  return (
    <>
      <Suspense
        fallback={
          <>
            <p>loading...</p>
          </>
        }
      >
        <Slider {...settings} className="sliderHeader headerIntro">
          {

            data.map((item , index)=> (
              <div key={item.id}>
                <Link href="/">
                  <div className="rounded overflow-hidden ">
                    <LazyImage
                       src={`${process.env.NEXT_PUBLIC_BASE_IMG}/${item?.image}`}
                      // src={item.imageUrl}
                      alt=""
                      width="500"
                      height="160"
                      className="h-sliderIndex md:h-500 shadow-2xl"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Link>
              </div>
            ))
          }
        </Slider>
      </Suspense>
    </>
  );
};
export default BannerSlider;
// async function fecthData() {
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`);

//   return data;
// }

// async function getData() {
//   const response =  fetch(
//     "http://31.7.74.54:9091/api/landing-page/v1/get-headers",
//     {
//       cache: "force-cache",
//     }
//   );
//   const data = await response.json();
//    return data;
// }
//  async function fecthData() {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page/v1/get-headers`
//   );
//   return data.data;
// }
