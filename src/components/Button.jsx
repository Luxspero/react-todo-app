import React from "react";

const Button = ({ onClick, children, type, modelBtn }) => {
  return (
    <button className={`btn ${modelBtn}`} type={type} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
