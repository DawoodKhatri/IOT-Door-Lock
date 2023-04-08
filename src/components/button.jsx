import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-600 text-white hover:bg-blue-500 text-lg p-3 rounded-2xl m-2 transition transition-opacity duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
