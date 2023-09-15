import LazyImage from "../common/LazyImage";
const SideBar = () => {
  return (
    <div className="w-full p-5 bg-bgSiderBar shadow-md mx-auto">
      <div className="mx-auto">
        <LazyImage
          width="300"
          height="300"
          alt="sidebar"
          className="mx-auto w-full"
          src="/img/sidebar/1.jpg"
        />
      </div>
      <div className="my-5 mx-auto">
        <LazyImage
          width="300"
          height="300"
          alt="sidebar"
          className="mx-auto w-full"
          src="/img/sidebar/2.jpg"
        />
      </div>
      <div className="mx-auto">
        <LazyImage
          width="300"
          height="300"
          alt="sidebar"
          className="mx-auto w-full"
          src="/img/sidebar/1.jpg"
        />
      </div>
    </div>
  );
};
export default SideBar;
