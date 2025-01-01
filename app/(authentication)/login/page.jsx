"use client";
import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import useLocalState from "../../../utils/localState";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLogin } from "../../../network/customHooks";
import Loader from "../../_components/reusables/loader";

const LoginPage = () => {
  const router = useRouter();

  const { saveUser } = useGlobalContext();
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
    saveUser(data);
    router.push("/");
  };

  const onError = (error) => {
    showAlert({ text: error.msg });
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
        <h1 className="font-bold text-4xl">Login</h1>
        <form
          onSubmit={onSubmit}
          className="md:w-96 grid gap-4 border p-4 rounded-sm"
        >
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
          <button type="submit" className="text-white bg-black py-2 text-base">
            {loading ? <Loader classNames="m-0 size-6" /> : "Submit"}
          </button>
        </form>
        <p>
          don&apos;t have an account ? <Link href="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
