import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Button, InputV1 } from "../../../Components";
// rsc
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    password: "",
    userName: "",
  });


  return (
    <>
      <h2 className="text-[27px] mb-[10px] text-[#111111] font-semibold font-poppins">
        Login
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
          label={"password"}
          error={errors?.password?.message}
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

        <Button label={"Login"} type="submit"  />
        <div className="mt-[15px]">
          <Link to="lost-password">Lost your password?</Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
