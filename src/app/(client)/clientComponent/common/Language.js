"use client";
import { useDispatch } from "react-redux";
import {
  english,
  persion,
} from "../../globalRedux/features/language/languageSlice";

const Language = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    if (e.target.value === "fa") {
      document.querySelector("body").classList.remove("dirLtr");
      document.querySelector("body").classList.add("dirRtl");
      dispatch(persion());
    } else {
      document.querySelector("body").classList.remove("dirRtl");
      document.querySelector("body").classList.add("dirLtr");
      dispatch(english());
    }
  };

  return (
    <>
      <div className="text-white">
        <select
          onChange={(e) => handleLanguageChange(e)}
          className="bg-transparent outline-none text-white"
        >
          <option value="en" className="text-gray-900">
            english
          </option>
          <option value="fa" className="text-gray-900">
            persion
          </option>
        </select>
      </div>
    </>
  );
};

export default Language;
