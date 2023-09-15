"use client";
import useSWR from "swr";
import DetailProduct from "./DetailProduct";
import { data } from "../../../db";
// const fetcher = (path) =>
//   fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${path}`).then((res) =>
//     res.json()
//   );

const SinglePage = ({ params }) => {
  // const { data, error, isLoading } = useSWR(params.productId, fetcher);

  return <DetailProduct data={data.product[params.productId - 1]} />;
};
export default SinglePage;
