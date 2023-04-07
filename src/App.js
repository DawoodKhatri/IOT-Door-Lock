import React from "react";
import Generator from "./components/Generator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgotpass from "./components/Forgotpass";
function App() {
  return (
    <div
      style={{
        paddingTop: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Wifi controlled Remote Door lock System
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="/forgot" element={<Forgotpass />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
