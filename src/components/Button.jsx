import React from "react";

const Button = ({btnText}) => {
  return (
    <button className="bg-blue-600 text-white  px-6 py-2 rounded-full">
      {btnText}
    </button>
  );
};

export default Button;