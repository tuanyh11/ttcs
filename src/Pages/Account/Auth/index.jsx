import React from "react";
import { Row, Col } from "../../../Components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Auth = () => {
  const signInSchema = yup.object().shape({
    email: yup.string().required("Email không được để trống").email("Email không đúng định dạng"),
    password: yup.string().required("Password không được để trống"),
  });

  const signUpSchema = yup.object().shape({
    userName: yup.string().required("Tên người dùng không được để trống"),
    email: yup.string().required("Email không được để trống").email("Email không đúng định dạng"),

    password: yup.string().required("Password không được để trống"),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], 'Mật khẩu xác nhận không khớp')
  });

  const methodsSignUp = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const methodsSignIn = useForm({
    resolver: yupResolver(signInSchema)
  });

  const { formState: formStateSignUp } = methodsSignUp;

  const { formState: formStateSignIn } = methodsSignIn;



  const Error = Object.values(
    Object.keys(formStateSignUp.errors).length > 0
      ? formStateSignUp.errors
      : formStateSignIn.errors
  ).map((error, i) => {
    return (
      <li key={error?.message}>
        <strong className="">Lỗi: </strong>
        {error?.message}
      </li>
    );
  });
  return (
    <div>
      <Row>
        <Col className={"w-full"}>
          <Col className={"w-full"}>
            <ul className="">{Error}</ul>
          </Col>
          <FormProvider
            {...{ formSignUp: methodsSignUp, formSignIn: methodsSignIn }}
          >
            <div className="flex">
              <Col className={"md:w-1/2 w-full"}>
                <SignIn />
              </Col>
              <Col className={"md:w-1/2 w-full md:mt-0 mt-[30px]"}>
                <SignUp />
              </Col>
            </div>
          </FormProvider>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
