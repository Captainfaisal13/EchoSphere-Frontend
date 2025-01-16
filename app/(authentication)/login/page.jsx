"use client";
import React, { useState } from "react";
import useLocalState from "../../../utils/localState";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLogin } from "../../../network/customHooks";
import Loader from "../../_components/reusables/loader";
import { useDispatch } from "react-redux";
import { saveUser } from "../../../redux/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { mutate: login } = useLogin();

  const onSuccess = (data) => {
    setValues({ email: "", password: "" });
    showAlert({
      text: `Welcome, ${data.name}. Redirecting to dashboard...`,
      type: "success",
    });
    dispatch(saveUser(data));
    router.push("/");
  };

  const onError = (error) => {
    showAlert({ text: error?.response?.data?.msg });
  };

  const onSettled = () => {
    setLoading(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const loginUser = { email: values.email, password: values.password };
    login(loginUser, { onSuccess, onError, onSettled });
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-5">
      <div className="hidden md:col-span-2 pr-6 lg:pr-10 md:flex items-center">
        <div className="ml-auto text-right">
          <h1 className="text-text-2 text-3xl xl:text-5xl font-bold">
            Welcome Back
          </h1>
          <p className="text-bg-5 text-sm xl:text-lg font-medium">
            Echo your voice in the infinite sphere!
          </p>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center xl:justify-start border-l border-border-1 xl:pl-10">
        <div className="text-center space-y-4 w-full md:w-auto px-10 md:px-0">
          {alert.show && (
            <p
              className={`${
                alert.type === "danger" ? "text-red-600" : "text-green-600"
              }`}
            >
              {alert.text}
            </p>
          )}
          <h1 className="font-bold text-3xl text-text-2">Login</h1>
          <form
            onSubmit={onSubmit}
            className="md:w-96 grid gap-4 rounded-md border-border-1"
          >
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="py-2 px-4 rounded-lg bg-bg-4 placeholder:text-text-6 placeholder:font-thin focus:outline-border-3 outline-none text-text-1"
            />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="py-2 px-4 rounded-lg bg-bg-4 placeholder:text-text-6 placeholder:font-thin focus:outline-border-3 outline-none text-text-1"
            />
            <button
              type="submit"
              className="bg-bg-5 text-text-0 py-4 rounded-lg"
            >
              {loading ? <Loader classNames="m-0 size-6" /> : "Submit"}
            </button>
          </form>
          <p className="text-text-8">
            don&apos;t have an account ?{" "}
            <Link className="text-blue-400 underline" href="/signup">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
