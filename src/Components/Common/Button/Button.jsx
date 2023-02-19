import React from "react";
import { Link } from "react-router-dom";

const ButtonV1 = ({
  label,
  onClick,
  children,
  className,
  style,
  type = "button",
  Tag = "button",
  to = "/",
  state = {},
}) => {
  if (Tag === "Link")
    return (
      <Link
        className={`button-v1 ${className}`}
        style={style}
        to={to}
        onClick={onClick}
        state={state}
      >
        {label || children}
      </Link>
    );

  return (
    <button
      type={type}
      className={`button-v1 ${className}`}
      style={style}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};

export default ButtonV1;
