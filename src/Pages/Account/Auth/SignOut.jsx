import React from "react";
import { useForm } from "react-hook-form";
import { Button, InputV1 } from "../../../Components";

const SignOut = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    password: "",
    userName: "",
    passwordConfirmation: "",
    email: "",
  });

  const password = watch("password");

  console.log(errors)


  return (
    <>
      <h2 className="text-[27px] mb-[10px] text-[#111111] font-semibold font-poppins">
        Register
      </h2>
      <form onSubmit={handleSubmit((value) => console.log(value))}>
        <InputV1
          label={"user name"}
          error={errors?.userName?.message}
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
          error={errors?.email?.message}
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
          error={errors?.password?.message}
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

          error={errors?.passwordConfirmation?.message}
          register={{
            ...register("passwordConfirmation", {
                required: true,
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

export default SignOut;
