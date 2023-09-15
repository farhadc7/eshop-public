import Slider from "react-slick";
import LazyImage from "../common/LazyImage";
const SliderSingleProduct = ({ product }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <div className="px-10">
      <Slider {...settings}>
        {product?.otherImage?.map((item, index) => (
          <div key={index}>
            <div className="rounded overflow-hidden">
              <LazyImage
                src={item}
                alt=""
                width="500"
                height="500"
                className="h-full w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderSingleProduct;
