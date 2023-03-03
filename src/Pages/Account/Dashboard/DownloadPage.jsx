import React from "react";
import { Link } from "react-router-dom";

const DownloadPage = () => {
  return (
    <div>
      <p className="">
        <Link className="text-main-color" to={"/shop"}>
          Browse products
        </Link>{" "}
        No downloads available yet.
      </p>
    </div>
  );
};

export default DownloadPage;
