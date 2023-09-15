import LazyImage from "../common/LazyImage";
import Link from "next/link";
const CategoryBox = (props) => {
  const { item } = props;
  return (
    <>
      <Link href="/">
        <div className="grid grid-cols-12 rounded shadow-md dark:text-gray-950 gap-5 bg-bgCategory items-center p-1 hover:bg-customHover transition-all">
          <div className="col-span-4 items pr-2">
            <LazyImage
              className="rounded  max-w-imageCategory bg-white "
              width="500"
              height="500"
              src={item.imageAddress?`${process.env.NEXT_PUBLIC_BASE_IMG}/${item.imageAddress}` : ""}
              alt=""
            />
          </div>
          <div className="col-span-8 block">
            <h5>{item.name}</h5>
            {/* <span className="text-xs">{item.body}</span> */}
          </div>
        </div>
      </Link>
    </>
  );
};
export default CategoryBox;
