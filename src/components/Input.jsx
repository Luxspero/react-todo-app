import React from "react";

const Input = ({ type, value, onChange, className, name, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      className={className}
      type={type}
      value={value}
      onChange={(event) => {
        onChange(event);
      }}
    />
  );
};

export default Input;
