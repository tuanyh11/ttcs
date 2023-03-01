import React from 'react'
import { Link } from 'react-router-dom';


const ButtonArrow = ({
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
          className={`button-v1 uppercase ${className}`}
          style={style}
          to={to}
          onClick={onClick}
          state={state}
        >
          {label || children}
        <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>

        </Link>
      );
  
    return (
      <button
        type={type}
        className={`button-v1 uppercase ${className}`}
        style={style}
        onClick={onClick}
      >
        {label || children}
        <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
      </button>
    );
  };

export default ButtonArrow