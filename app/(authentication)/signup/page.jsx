"use client";
import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";
import useLocalState from "../../../utils/localState";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSignup } from "../../../network/customHooks";

const SignUpPage = () => {
  const router = useRouter();

  const { saveUser } = useGlobalContext();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();

  const { mutate: signup } = useSignup();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSuccess = (data) => {
    setValues({ name: "", username: "", email: "", password: "" });
    showAlert({
      text: `Welcome, ${data.user.name}. Redirecting to dashboard...`,
      type: "success",
    });
    saveUser(data.user);
    router.push("/");
  };

  const onError = (error) => {
    showAlert({ text: error.response.data.msg });
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

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="grid gap-4 text-center">
        {alert.show && (
          <p
            className={`${
              alert.type === "danger" ? "text-red-600" : "text-green-500"
            }`}
          >
            {alert.text}
          </p>
        )}
        <h1 className="font-bold text-4xl">Sign Up</h1>
        <form
          onSubmit={onSubmit}
          className="md:w-96 grid gap-4 border p-4 rounded-sm"
        >
          <input
            type="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2"
          />
          <input
            type="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2"
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2"
          />
          <button type="submit" className="text-white bg-black py-2">
            {loading ? "Loading...." : "Submit"}
          </button>
        </form>
        <p>
          Already have an account ? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
