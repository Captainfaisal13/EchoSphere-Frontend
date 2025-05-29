"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import Image from "next/image";

import useLocalState from "../../../utils/localState";
import { useLoginWithGoogle, useSignup } from "../../../network/customHooks";
import Loader from "../../_components/reusables/loader";
import { saveUser } from "../../../redux/slices/userSlice";
import TickIcon2 from "../../../public/_assets/svgComponents/tickIcon2";
import WarningIcon from "../../../public/_assets/svgComponents/warningIcon";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();

  const { mutate: signup } = useSignup();
  const { mutate: loginWithGoogle } = useLoginWithGoogle();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSuccess = (data) => {
    setValues({ name: "", username: "", email: "", password: "" });
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
    const signupUser = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
    };
    signup(signupUser, { onSuccess, onError, onSettled });
  };

  // google login
  const handleGoogleLogin = async (credentialResponse) => {
    hideAlert();
    setLoading(true);
    loginWithGoogle(credentialResponse, { onSuccess, onError, onSettled });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      handleGoogleLogin({ loginType: "custom", ...credentialResponse });
    },
    onError: () => {
      console.log("Login Failed");
    },
    flow: "auth-code",
  });

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      handleGoogleLogin({ loginType: "one-tap", ...credentialResponse });
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div className="w-full h-dvh grid grid-cols-1 md:grid-cols-5">
      <div className="hidden md:col-span-2 pr-6 lg:pr-10 md:flex items-center">
        <div className="ml-auto text-right">
          <h1 className="text-text-2 text-3xl xl:text-5xl font-bold">
            Create Account
          </h1>
          <p className="text-bg-5 text-sm xl:text-lg font-medium">
            Echo your voice in the infinite sphere!
          </p>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center xl:justify-start border-l border-border-1 xl:pl-10">
        <div className="text-center space-y-4 px-10 md:px-0 w-96">
          {alert.show && (
            <div
              className={`flex gap-2 justify-center items-center text-xs font-thin bg-bg-6 rounded-md p-2 ${
                alert.type === "danger" ? "text-red-600" : "text-green-600"
              }`}
            >
              {alert.type === "danger" ? (
                <div className="fill-current">
                  <WarningIcon height="18px" width="18px" />
                </div>
              ) : (
                <div className="fill-current">
                  <TickIcon2 height="18px" width="18px" />
                </div>
              )}

              <p className={`line-clamp-2 overflow-hidden text-left`}>
                {alert.text}
              </p>
            </div>
          )}
          <h1 className="font-bold text-3xl text-text-2">Sign Up</h1>
          <form
            onSubmit={onSubmit}
            className="grid gap-4 rounded-md border-border-1 text-sm"
          >
            <input
              type="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              className="py-2 px-4 rounded-lg bg-bg-4 placeholder:text-text-6 placeholder:font-thin focus:outline-border-3 outline-none text-text-1"
            />
            <input
              type="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Username"
              className="py-2 px-4 rounded-lg bg-bg-4 placeholder:text-text-6 placeholder:font-thin focus:outline-border-3 outline-none text-text-1"
            />
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
              className="bg-bg-5 text-text-0 py-2 rounded-lg"
            >
              {loading ? <Loader classNames="m-0 size-6" /> : "Submit"}
            </button>
          </form>
          <div className="flex gap-2 items-center">
            <div className="h-[2px] w-full bg-bg-1" />
            <h3 className="text-text-1">OR</h3>
            <div className="h-[2px] w-full bg-bg-1" />
          </div>
          <button
            onClick={googleLogin}
            className="flex gap-2 py-[10px] text-xs bg-text-1 text-bg-0 rounded-md w-full"
          >
            <div className="size-4 relative ml-auto my-auto">
              <Image src="/_assets/google-icon.svg" fill alt="google-icon" />
            </div>{" "}
            <p className="mr-auto">Sign up With Google</p>
          </button>
          <p className="text-text-8 font-thin text-xs">
            already have an account ?{" "}
            <Link className="text-text-9 underline" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
