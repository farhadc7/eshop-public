import { Fragment } from "react";

const RadioInput = ({ formik, name, radioOptions }) => {
  return (
    <>
      <div
        className="relative mb-6 dark:text-gray-950"
        data-te-input-wrapper-init
      >
        <div className="flex">
          {radioOptions.map((item, index) => (
            <div
              className="mr-5 flex items-center justify-center"
              key={item.value}
            >
              <input
                type="radio"
                name={name}
                value={item.value}
                onChange={formik.handleChange}
                checked={formik.values.gender === item.value}
                className=" h-5 w-5  "
                id={item.value}
              />
              <label
                htmlFor={item.value}
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>

        {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-500">{formik.errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default RadioInput;
