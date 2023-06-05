import React from "react";
import StairBg from "./StairBg";

const BackgroundContainer = ({ children }) => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <StairBg />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundContainer;
