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
  disabled = false,
}) => {
  if (Tag === "Link")
    return (
      <Link
        className={`button-v1 uppercase ${className}`}
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
      className={`button-v1 ${className} ${disabled ? " opacity-60 cursor-not-allowed" : ''}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};

export default ButtonV1;
