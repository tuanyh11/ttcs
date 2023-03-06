import React, { useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { loginAsync } from "../../../api";
import { Button, InputV1 } from "../../../Components";
import { useAuthStore } from "../../../Components/store";
// rsc
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext().formSignIn  ;


  const login = useAuthStore(state => state.login)

  const {isLoading, mutate, data, error} = useMutation((data) => loginAsync(data).then(user => user)  )

  useEffect(( ) => {
    data && login(data)
  }, [data])

  return (
    <>
  
      <h2 className="text-[27px] leading-[48px] mb-[10px] text-[#111111] font-semibold font-poppins">
        Login
      </h2>
      <form onSubmit={handleSubmit((value) => mutate(value))}>
        <InputV1
          label={"user name"}
          register={{
            ...register("userName", {
              required: {
                value: true,
                message: "Username is required.",
              },
            }),
          }}
        />
        <InputV1
          label={"password"}
          type={"password"}

          register={{
            ...register("password", {
              required: {
                value: true,
                message: "Password is required.",
              },
            }),
          }}
        />

        <Button label={"Login"} type="submit"  />
        <div className="mt-[15px]">
          <Link to="lost-password">Lost your password?</Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
