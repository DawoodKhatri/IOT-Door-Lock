import React from "react";

const InputButton = ({ children, negative, onClick }) => {
  return (
    <button
      className={`${
        negative
          ? "border-solid border-2 border-blue-600 hover:bg-blue-200"
          : "bg-blue-600 text-white hover:bg-blue-500"
      } text-2xl w-[50px] h-[50px] rounded-full m-3 transition transition-opacity duration-300`}
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </button>
  );
};

export default InputButton;
