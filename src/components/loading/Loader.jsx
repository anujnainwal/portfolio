import React from "react";
import "./assets/loading.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Adjusts the height to the full viewport height
        // Adjusts the width to the full viewport width
        backgroundColor: "#0e1b25de",
      }}>
      <div className="custom-loader"></div>
    </div>
  );
};

export default Loader;
