import { useMutation } from "react-query";
import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { registerAsync } from "../../../api";
import { Button, InputV1 } from "../../../Components";
import useAuth from "../../../Components/store/authStore";
import { strongPassword } from "../../../utils";

const SignUp = () => {
  const { register, handleSubmit, watch, setError, clearErrors } =
    useFormContext().formSignUp;

  const [disPlayError, setDisPlayError] = useState({
    message: "",
    hint: "",
    type: ""
  });

  const {login} = useAuth();

  const password = watch("password");
  const confirmPassword = watch("passwordConfirmation");

  // console.log(confirmPassword)

  const { isLoading, mutate, error } = useMutation(registerAsync, {
    onSuccess: (data) => login(data)
  });

  useEffect(() => {
    if (error)
      setError("error", {
        type: "error",
        message: error?.message,
      });
  }, [error]);



  useEffect(() => {
    setDisPlayError(strongPassword(confirmPassword));
  }, [confirmPassword]);

 

  const handleRegister = (data) => {
    if (
      disPlayError.type.toLocaleLowerCase() !== "weak" &&
      disPlayError.type.toLocaleLowerCase() !== "very-weak"
    ) {
      mutate(data);
    }
  };

  return (
    <>
      <h2 className="text-[27px] leading-[48px] mb-[10px] text-[#111111] font-semibold font-poppins">
        Register
      </h2>
      <form onSubmit={handleSubmit((value) => handleRegister(value))}>
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
          className="!mb-0"
          register={{
            ...register("passwordConfirmation", {
              validate: value => value === password || "passwords do not match",
            }),
            
          }}
        />
        <div className="mb-[15px]">
          <div className="">{disPlayError?.message}</div>
          <small className="">{disPlayError?.hint}</small>
        </div>
        <div className="flex flex-wrap mb-[15px]">
          <label className="block w-full mb-[8px]">
            <span className="">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
            </span>
          </label>
          <Button onClick={() => clearErrors("error")} label={"REGISTER"} type="submit" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
