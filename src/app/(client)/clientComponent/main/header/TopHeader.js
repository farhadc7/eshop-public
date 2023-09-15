import Link from "next/link";
import Language from "../../common/Language";

const TopHeader = () => {
  return (
    <div className="w-full bg-bgBtn h-9 md:flex items-center topMenu px-6 hidden ">
      <div className=" grid grid-cols-10 w-full  text-white text-sm md:max-w-custom  mx-auto">
        <div className="col-span-7 flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>

          <span> Free Standard Delivery Over AED 100</span>
        </div>

        <div className="col-span-1 text-center item  hover:text-customHover flex items-center">
          <Link href="tel:050 456 7731" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mx-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span> 050 456 7731</span>
          </Link>
        </div>
        <div className="col-span-1 text-center item  hover:text-customHover">
          <Language />
        </div>
        <div className="col-span-1 text-center  hover:text-customHover ">
          <Link href="/login">Login</Link>/
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
