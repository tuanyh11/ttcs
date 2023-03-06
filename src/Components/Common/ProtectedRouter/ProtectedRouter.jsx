import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../store/authStore";

const ProtectedRouter = (backTo = () => {}) => {
  return () => {
    const { user } = useAuth();

    console.log(user);
    return <div>{backTo(user, Navigate)}</div>;
  };
};

export default ProtectedRouter;
