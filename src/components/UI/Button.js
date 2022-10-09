import React from "react";

import classes from "./Button.module.css";

export const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
