import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../Components/store";

const IndexPage = () => {
  const logout = useAuthStore(state => state.logout)

  return (
    <div>
      <div className="mb-[15px]">
        Hello <strong>tuan</strong> (not <strong>tuan</strong>?{" "}
        <button onClick={() => logout()} className="text-main-color cursor-pointer">Log out</button>)
      </div>
      <div className="mb-[15px]">
        From your account dashboard you can view your{" "}
        <Link className="text-main-color" to={"orders"}>
          {" "}
          recent orders
        </Link>
        , manage your(not{" "}
        <Link to={"/"} className="text-main-color">
          shipping and billing addresses,
        </Link>
        ? and{" "}
        <Link to={"/"} className="text-main-color cursor-pointer">
          edit your password and account details.
        </Link>
        )
      </div>
    </div>
  );
};

export default IndexPage;
