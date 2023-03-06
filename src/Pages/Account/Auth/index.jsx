import React from "react";
import { Row, Col } from "../../../Components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useForm, FormProvider } from "react-hook-form";

const Auth = () => {
  const methodsSignUp = useForm();

  const methodsSignIn = useForm();

  const {
    formState: formStateSignUp,
  } = methodsSignUp;

  const {
    formState: formStateSignIn,
  } = methodsSignIn;

  console.log(formStateSignIn.errors);

  const Error = Object.values(Object.keys(formStateSignUp.errors).length > 0 ? formStateSignUp.errors : formStateSignIn.errors).map((error, i) => {
    return (
      <li key={error?.message}>
        <strong className="">Error: </strong>
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
          <FormProvider {...{formSignUp: methodsSignUp, formSignIn: methodsSignIn}}>
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
