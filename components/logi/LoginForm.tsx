import React from "react";
import { useFormik } from "formik";
import Input from "./Input";
import Button from "../general/Button";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });
  return (
    <>
      <div className="md:w-5/12  w-full mt-10 px-6 text-center md:text-left">
        <h1 className="text-primary mt-8 md:mt-0 font-bold text-3xl">
          Welcome to Tourcation
        </h1>
        <p className="text-inactive mt-3">Enter details to login</p>
        <form className="flex flex-col mt-4 " onSubmit={formik.handleSubmit}>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            id="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            classes="lg:w-3/4 w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm block bg-white border-borderColor mt-3"
          />
          <Input
            placeholder="Password"
            type="text"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            classes="lg:w-3/4 w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm block bg-white border-borderColor mt-6"
          />
          <Button
            type="submit"
            text="Log In"
            classes="w-full md:w-9/12 mt-6 rounded-md"
          />
          <Link to="/" className="mt-3 text-indigo-600 text-sm">
            Forgot Password?
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
