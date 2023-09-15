import Slider from "react-slick";

import CommentCard from "./CommentCard";
const CommentSlider = ({ count, data }) => {
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
        {data?.map((item) => (
          <div key={item.id}>
            <CommentCard item={item} />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default CommentSlider;
