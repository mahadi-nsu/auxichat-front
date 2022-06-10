import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { axios } from "../lib/axios";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    axios
      .post("/auth", { email, password })
      .then((res) => {
        // console.log(res.data);
        router.push("/chat");
      })
      .catch((err) => {
        // console.log(err.response.data);
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        }
      });
  };

  return (
    <div className="min-h-screen w-screen grid grid-cols-12">
      <div className="col-span-6 bg-[#A4C4B5] flex justify-center items-center">
        <img
          className="w-2/3"
          src="./images/undraw_personal_opinions_re_qw29.svg"
          alt="banner image"
        />
      </div>

      <div className="col-span-6 flex justify-around items-center flex-col gap-9">
        <div className="flex flex-col gap-16 text-center justify-between">
          <h1 className="text-5xl text-[#A4C4B5] font-bold">AUXICHAT</h1>
          <h2 className="text-gray-500 font-semibold">Welcome to AUXICHAT</h2>
        </div>

        <div className="max-w-[70%] w-80 flex flex-col ">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label
              className="text-sm text-gray-400 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-b-2 py-1 text-lg text-gray-800 focus:border-[#A4C4B5] focus:outline-none placeholder:italic placeholder:text-slate-300 placeholder:text-base"
              id="email"
              type="email"
              placeholder="enter your email here"
              {...register("email", { required: true, maxLength: 80 })}
            />
            <label
              className="text-sm text-gray-400 font-semibold mt-5"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-b-2 py-1 text-lg text-gray-800 focus:border-[#A4C4B5] focus:outline-none placeholder:italic placeholder:text-slate-300 placeholder:text-base"
              id="password"
              type="password"
              placeholder="enter your password here"
              {...register("password", { required: true, maxLength: 100 })}
            />
            <p className="text-[.60rem] text-[#A4C4B5] self-end pt-2 cursor-pointer">
              Forgot password ?
            </p>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <input
              className="my-5 bg-[#696969] text-[#fff] px-10 py-2 rounded-full cursor-pointer max-w-max self-center"
              type="submit"
              value="Sign in"
            />
          </form>
        </div>

        <div>
          <p className="text-sm text-gray-400">
            New Here ?&nbsp;
            <span className="cursor-pointer text-[#A4C4B5]">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
