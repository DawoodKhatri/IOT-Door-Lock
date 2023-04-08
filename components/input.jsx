import React from "react";

const Input = ({ value }) => {
  return (
    <div className="my-3 text-white flex flex-wrap justify-evenly">
      <p className="bg-blue-600 rounded rounded-lg m-2 p-1 text-2xl w-[40px]">
        {value[0] ? value[0] : "_"}
      </p>
      <p className="bg-blue-600 rounded rounded-lg m-2 p-1 text-2xl w-[40px]">
        {value[1] ? value[1] : "_"}
      </p>
      <p className="bg-blue-600 rounded rounded-lg m-2 p-1 text-2xl w-[40px]">
        {value[2] ? value[2] : "_"}
      </p>
      <p className="bg-blue-600 rounded rounded-lg m-2 p-1 text-2xl w-[40px]">
        {value[3] ? value[3] : "_"}
      </p>
    </div>
  );
};

export default Input;
