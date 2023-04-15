import { useMutation } from "react-query";
import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { registerAsync } from "../../../api";
import { Button, InputV1 } from "../../../Components";
import useAuth from "../../../Components/store/authStore";
import { handleError, moveToTop, strongPassword } from "../../../utils";
import { registerApi } from "../../../api/auth.api";
import { FadeLoader } from "react-spinners";

const SignUp = () => {
  const { register, handleSubmit, watch, setError, clearErrors } =
    useFormContext().formSignUp;

  const { login } = useAuth();

  const { isLoading, mutate } = useMutation(registerApi, {
    onSuccess: (data) => login(data),
    onError: (error) => {
      setError("error", {
        type: "error",
        message: handleError(error),
      });
      moveToTop();
    },
  });


  return (
    <>
      <h2 className="text-[27px] leading-[48px] mb-[10px] text-[#111111] font-semibold font-poppins">
        Đăng Ký
      </h2>
      <form onSubmit={handleSubmit(mutate)}>
        <InputV1
          label={"Tên Người Dùng"}
          register={{
            ...register("userName"),
          }}
        />
        <InputV1
          label={"Email"}
          register={{
            ...register("email"),
          }}
        />
        <InputV1
          label={"Mật Khẩu"}
          type={"password"}
          register={{
            ...register("password"),
          }}
        />
        <InputV1
          label={"Xác Nhận mật khẩu"}
          type={"password"}
          className="!mb-0"
          register={{
            ...register("password_confirmation"),
          }}
        />

        <div className="flex flex-wrap my-[15px] ">
          <label className="block w-full mb-[8px]">
            <span className="">
              Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của
              bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài
              khoản của bạn và để các mục đích khác được mô tả trong{" "}
            </span>
          </label>
          {isLoading ? (
            <FadeLoader color="#ff4545" />
          ) : (
            <Button
              onClick={() => clearErrors("error")}
              label={"Đăng Ký"}
              type="submit"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default SignUp;
