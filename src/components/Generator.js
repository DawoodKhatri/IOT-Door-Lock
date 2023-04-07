import React, { useState } from "react";
import { Link } from "react-router-dom";

const Generator = () => {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <marquee>
        {" "}
        <p>Enter Password Here</p>
      </marquee>
      <div
        style={{
          width: "200p",
          height: "30px",
          display: " block",
          borderRadius: "5px",
          padding: "5px",
          fontSize: "29px",
          color: "aliceblue",
          backgroundColor: "grey",
          textAlign: "right",
        }}
      >
        {value}
      </div>
      <div className="glass">
        <div style={{ display: "flex", padding: "2px" }}>
          <button
            onClick={() => {
              setValue(value + "1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setValue(value + "2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setValue(value + "3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setValue(value + "4");
            }}
          >
            4
          </button>
        </div>
        <div style={{ display: "flex", padding: "2px" }}>
          <button
            onClick={() => {
              setValue(value + "5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setValue(value + "6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setValue(value + "7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setValue(value + "8");
            }}
          >
            8
          </button>
        </div>
        <div style={{ display: "flex", padding: "2px" }}>
          <button
            onClick={() => {
              setValue(value + "9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              setValue(value + "0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setValue(value + "@");
            }}
          >
            @
          </button>
          <button
            onClick={() => {
              setValue("");
            }}
          >
            C
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <button
          style={{ width: "120px" }}
          onClick={() => {
            console.log(value);
          }}
        >
          Open
        </button>
        <button
          style={{ width: "120px" }}
          onClick={() => {
            console.log(value);
          }}
        >
          Close
        </button>
      </div>
      <Link to="/forgot">
        <button
          style={{
            width: "250px",
            marginLeft: "25px",
          }}
        >
          Forgot Password
        </button>
      </Link>
    </div>
  );
};

export default Generator;
