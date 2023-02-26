import React from "react";
import { Button } from "../../../Components";

const ResetPassword = () => {
  return (
    <div>
      <p className="">
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email. Username or
        email
      </p>
      <div className="mb-[15px]">
        <div className="mb-2">Username or email</div>
        <input
          type="text"
          className="h-[50px]  w-full border outline-none px-5"
        />
      </div>
      <Button label={"Reset Password"} />
    </div>
  );
};

export default ResetPassword;
