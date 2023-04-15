import React, { useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { loginAsync } from "../../../api";
import { login } from "../../../api/auth.api";
import { Button, InputV1 } from "../../../Components";
import { useAuthStore } from "../../../Components/store";
import { handleError, moveToTop } from "../../../utils";
import { FadeLoader } from "react-spinners";
// rsc
const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useFormContext().formSignIn;

  const loginSync = useAuthStore((state) => state.login);

  const { isLoading, mutate } = useMutation(login, {
    onSuccess: (data) => {
      loginSync(data);
    },
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
        Đăng Nhập
      </h2>
      <form onSubmit={handleSubmit((value) => mutate(value))}>
        <InputV1
          label={"Email"}
          register={{
            ...register("email"),
          }}
        />
        <InputV1
          label={"Mật khẩu"}
          type={"password"}
          register={{
            ...register("password"),
          }}
        />

        {isLoading ? (
          <FadeLoader color="#ff4545" />
        ) : (
          <Button label={"Đăng Nhập"} type="submit" />
        )}

        {/* <div className="mt-[15px]">
          <Link to="lost-password">Lost your password?</Link>
        </div> */}
      </form>
    </>
  );
};

export default SignIn;
