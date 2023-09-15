"use client";

import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button
          aria-label="ScrollTop"
          onClick={goToTop}
          className="z-50 fixed shadow-2xl z-90 bottom-3 right-3 border-0 w-16 h-16 rounded-full drop-shadow-md bg-[#FC4F00] text-white text-3xl font-bold"
        >
          &uarr;
        </button>
      )}
    </>
  );
};
export default ScrollTop;
