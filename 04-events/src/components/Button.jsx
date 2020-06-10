import React from "react";

const Button = ({ text }) => {
  const handleClick = (e) => {
    console.log(e.nativeEvent);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
