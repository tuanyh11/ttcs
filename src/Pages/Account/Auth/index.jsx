import React from "react";
import { Row, Col } from "../../../Components";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Auth = () => {
  return (
    <div>
      <Row>
        <Col className={"w-full"}>
          <div className="flex">
            <Col className={"md:w-1/2 w-full"}>
              <SignIn />
            </Col>
            <Col className={"md:w-1/2 w-full md:mt-0 mt-[30px]"}>
              <SignOut />
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
