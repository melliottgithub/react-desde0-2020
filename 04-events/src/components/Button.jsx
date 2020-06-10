import React from "react";

const Button = ({ text }) => {
  const handleClick = (e) => {
    console.log(e);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
