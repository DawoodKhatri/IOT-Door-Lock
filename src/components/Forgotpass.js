import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forgotpass = () => {
  const [npass, setNpass] = useState("");
  const [opass, SetOpass] = useState("");

  return (
    <div className="glass2">
      <h1 style={{ textAlign: "center" }}>Forgot Password</h1>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Enter Old Password :&nbsp;
        <input
          type="text"
          style={{ height: "25px", width: "200px", fontSize: "20px" }}
        />
        <br />
        Enter New Password :&nbsp;
        <input
          type="text"
          style={{ height: "25px", width: "200px", fontSize: "20px" }}
        />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button style={{ width: "150px" }}>Change</button>
        <Link to={"/"}>
          <button style={{ width: "150px" }}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Forgotpass;
