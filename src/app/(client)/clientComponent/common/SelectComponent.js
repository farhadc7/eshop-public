const SelectComponent = ({ selectOptions, name, formik }) => {
  return (
    <>
      <div className="mb-4">
        <select
          name={name}
          {...formik.getFieldProps(name)}
          className="w-full py-2 outline-none textField__input dark:bg-slate-500 dark:text-white"
          placeholder="name"
        >
          {selectOptions.map((item, index) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-500">{formik.errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default SelectComponent;
