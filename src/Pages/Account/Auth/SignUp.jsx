import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Button, InputV1 } from "../../../Components";
import useAuth from "../../../Components/store/authStore";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
  } = useFormContext().formSignUp ;

  const password = watch("password");



  return (
    <>
      <h2 className="text-[27px] leading-[48px] mb-[10px] text-[#111111] font-semibold font-poppins">
        Register
      </h2>
      <form onSubmit={handleSubmit((value) => console.log(value))}>
        <InputV1
          label={"user name"}
          register={{
            ...register("userName", {
              required: {
                value: true,
                message: "Please enter your user name",
              },
            }),
          }}
        />
        <InputV1
          label={"Email address"}
          register={{
            ...register("email", {
              required: {
                value: true,
                message: "Please enter your Email",
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
                message: "Please enter your password",
              },
            }),
          }}
        />
        <InputV1
          label={"Password Confirm"}
          type={"password"}

          register={{
            ...register("passwordConfirmation", {
                validate: (value) => value === password || "Passwords do not match"
            }),
          }}
        />
        <div className="flex flex-wrap mb-[15px]">
          <label className="block w-full mb-[8px]">
            <span className="">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
            </span>
          </label>
          <Button label={"REGISTER"} type="submit" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
