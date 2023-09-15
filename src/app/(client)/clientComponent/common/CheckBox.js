const CheckBox = ({ checkboxOptions, formik, name }) => {
  return (
    <>
      <div className="flex items-center mb-4 dark:text-gray-950">
        {checkboxOptions.map((item) => (
          <div
            key={item.value}
            className="flex justify-center items-center mx-2"
          >
            <input
              id={item.value}
              type="checkbox"
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>{" "}
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500">{formik.errors[name]}</div>
      )}
    </>
  );
};

export default CheckBox;
