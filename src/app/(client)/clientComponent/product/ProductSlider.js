import Slider from "react-slick";
import useSWR from "swr";
import Product from "./Product";
import { data } from "../../../db";
// const fetcher = (path) =>
//   fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`).then((res) => res.json());
const ProductSlider = ({ count }) => {
  // const { data, error, isLoading } = useSWR("product", fetcher);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: count,
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

  return (
    <>
      <Slider {...settings} className="sliderHeader productSlider">
        {data.product?.map((item) => (
          <div key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default ProductSlider;
