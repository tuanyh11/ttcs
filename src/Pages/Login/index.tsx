import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../api/user.api";
import { UserInterface } from "../../interfaces/user.interface";
import userStore from "../../store/user.store";
import { handleError } from "../../utils/index.utils";
import { useNavigate } from "react-router-dom";
import {yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const Login = () => {

  const loginSchema = yup.object().shape({
    email: yup.string().email("Email không đúng định dạng").required(),
    password: yup.string().required("Mật khẩu không được để trống")
  })

  const [error, setError] = useState('')

  const {register, handleSubmit} = useForm<UserInterface>({
    resolver: yupResolver(loginSchema)
  })

  const nav = useNavigate()

  const {setUser} = userStore()

  const {mutate} = useMutation(login, {
    onSuccess: (data) => {
      setUser(data)
      nav('/')
    },
    onError: (error) => {
      // setError( handleError(error))
      window.alert( handleError(error))
      
    }
  })

  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className="bg-white rounded-md w-full md:max-w-[400px] ">

          <form onSubmit={handleSubmit((data) => mutate(data))} className="p-5">
            <div>
              <div>
                <label htmlFor="vertical-form-1" className="inline-block mb-2">
                  Email
                </label>
                <input
                  id="vertical-form-1"
                  type="text"
                  placeholder="example@gmail.com"
                  {...register("email")}
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="vertical-form-2" className="inline-block mb-2">
                  Password
                </label>
                <input
                  id="vertical-form-2"
                  type="text"
                  placeholder="secret"
                  {...register("password")}
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
                />
              </div>
              <div className="flex items-center mt-5">
                
              </div>
              <button type="submit" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mt-5">
                Login
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
