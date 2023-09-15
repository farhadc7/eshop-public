const Input = ({ formik, name, label, placeholder, type = "text" }) => {
  return (
    <>
      <div className="relative mb-10" data-te-input-wrapper-init>
        <label htmlFor={name} className="textField__lable dark:text-gray-950">
          {label}
        </label>
        <input
          autoComplete="off"
          type={type}
          name={name}
          {...formik.getFieldProps(name)}
          className="textField__input dark:bg-slate-500 dark:text-white"
          id={name}
          placeholder={placeholder}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-500">{formik.errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default Input;
