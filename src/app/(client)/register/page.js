"use client";
import LazyImage from "../clientComponent/common/LazyImage";
import Link from "next/link";
import { useFormik } from "formik";
import {
  object,
  string,
  number,
  date,
  InferType,
  ref,
  array,
  boolean,
} from "yup";
import Cookies from "js-cookie";
import Input from "../clientComponent/common/Input";
import RadioInput from "../clientComponent/common/RadioInput";
import SelectComponent from "../clientComponent/common/SelectComponent";
import CheckBox from "../clientComponent/common/CheckBox";
import { useEffect } from "react";

const initialValues = {
  username: "",
  email: "",
  password: "",
  PasswordConfirm: "",
  gender: "",
  country: "",
  intrests: [],
  terms: false,
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
  // Cookies.remove("informationSign");
  // Cookies.set("informationSign", {username:values.username,password:values.password}, { expires: 7 });
};

const validationSchema = object({
  username: string()
    .required("username is required")
    .min(6, "usename length is not valid"),
  email: string().required("email is required").email("email is not valid"),
  password: string()
    .required("password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  PasswordConfirm: string()
    .required("PasswordConfirm is required")
    .oneOf([ref("password"), null], "passwords must match"),
  gender: string().required("Gender is required"),
  country: string().required("Country is required"),
  intrests: array().min(1).required("intrests is required"),
  terms: boolean().oneOf([true], "Most Accept Terms and Conditions"),
});

const radioOptions = [
  { label: "male", value: "0" },
  { label: "female", value: "1" },
];
const checkboxOptions = [
  { label: "seller", value: "seller" },
  { label: "customer", value: "customer" },
  { label: "wholesaler", value: "wholesaler" },
];
const selectOptions = [
  { label: "country", value: "" },
  { label: "iran", value: "iran" },
  { label: "usa", value: "usa" },
];
export default function Register() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  useEffect(() => {
    Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
      expires: 7,
    });
  }, []);
  return (
    <>
      <title>Register</title>
      <main className="flex  flex-col items-center justify-between md:p-10 my-20 dark:text-gray-950">
        <section className="w-full bg-bgLogin">
          <div className="h-full">
            <div className="g-6 flex flex-wrap items-center justify-center py-5 lg:justify-around ">
              <div className="shrink-1 mb-12 border-r-2 hidden md:block border-gray-200 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <LazyImage
                  src="/img/login.svg"
                  className="w-full p-16"
                  alt="Sample image"
                  width="300"
                  height="300"
                />
              </div>

              <div className="md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 px-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold ">
                      Register
                    </p>
                  </div>

                  <Input
                    formik={formik}
                    name="username"
                    placeholder="username"
                    label="Username"
                  />
                  <Input
                    formik={formik}
                    name="email"
                    placeholder="Email address"
                    label="  email"
                  />
                  <Input
                    formik={formik}
                    name="password"
                    placeholder="Password"
                    label="Password"
                    type="password"
                  />
                  <Input
                    formik={formik}
                    name="PasswordConfirm"
                    placeholder="PasswordConfirm"
                    label="PasswordConfirm"
                    type="password"
                  />
                  <SelectComponent
                    selectOptions={selectOptions}
                    name="country"
                    formik={formik}
                  />
                  <RadioInput
                    radioOptions={radioOptions}
                    formik={formik}
                    name="gender"
                  />
                  <CheckBox
                    checkboxOptions={checkboxOptions}
                    formik={formik}
                    name="intrests"
                  />
                  <br />
                  <div className="mb-6 flex items-center justify-between ">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        name="terms"
                        value={true}
                        {...formik.getFieldProps("terms")}
                        id="remember"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>

                    <Link href="#!">Forgot password?</Link>
                  </div>

                  <div className="text-center lg:text-left ">
                    <button
                      type="submit"
                      className="inline-block w-full    bg-blue-700 rounded  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      aria-label="Login"
                    >
                      Login
                    </button>

                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                      Do have an account?
                      <Link
                        href="/"
                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      >
                        login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
