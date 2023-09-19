import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layouts;
