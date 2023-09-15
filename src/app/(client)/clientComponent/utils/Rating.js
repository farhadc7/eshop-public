import ReactStars from "react-rating-stars-component";
const Rating = ({ item }) => {
  return (
    <div className="flex items-center mt-2.5 mb-5">
      <ReactStars
        count={5}
        size={24}
        edit={false}
        value={Number(item.rate)}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />

      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        {item.rate}
      </span>
    </div>
  );
};

export default Rating;
