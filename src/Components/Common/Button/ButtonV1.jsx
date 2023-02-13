import React from "react";
import './button.css'

const ButtonV1 = ({ label, onClick, children, className, style, type = "button", Tag = 'button', to }) => {

  if(Tag !== 'Link') return (
    <Tag className={className || 'button-v1'} style={style} to={to}  onClick={onClick}>
      {label || children}
    </Tag>
  )

  return (
    <button type={type} className={className || 'button-v1'} style={style} onClick={onClick} >
      {label || children}
    </button>
  );
};

export default ButtonV1;
