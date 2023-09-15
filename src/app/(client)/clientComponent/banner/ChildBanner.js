import Link from "next/link";
 import axios from "axios";
import LazyImage from "../common/LazyImage";
import { data } from "../../../db";
import { useEffect, useState } from "react";
const ChildBanner = () => {

   const [data,setData]=useState([]);

   const fetchData = () => {
     axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page/v1/get-items`
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
      <div className="shadow-2xl">
        <Link href="/">
          <div className="rounded overflow-hidden">
            <LazyImage
              style={{ width: "100%" }}
              className="md:h-240"
              width="500"
              height="160"
               src={`${process.env.NEXT_PUBLIC_BASE_IMG}/${data[0]?.image}`}
              //src={data?.banner0.imageUrl}
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="shadow-2xl mt-5">
        <Link href="/">
          <div className="rounded overflow-hidden">
            <LazyImage
              style={{ width: "100%" }}
              className="md:h-240"
              width="500"
              height="160"
               src={`${process.env.NEXT_PUBLIC_BASE_IMG}/${data[1]?.image}`}
              // src={data?.banner1[1].imageUrl}
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  );
};
export default ChildBanner;
async function fecthData() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-page/v1/get-items`);
  return data;
}
