"use client";
import { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
const SliderFilter = () => {
  const [valueInput, setValueInput] = useState({ min: 2, max: 100 });
  return (
    <div className="px-2">
      <InputRange
        step={100}
        maxValue={1000}
        minValue={0}
        value={valueInput}
        onChange={(value) => setValueInput(value)}
      />
    </div>
  );
};
export default SliderFilter;
