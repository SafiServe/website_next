// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="loader ease-linear rounded-full border-4 border-t-3"
        style={{ borderTopColor: "#03519d", height: "2rem", width: "2rem" }}
      ></div>
    </div>
  );
};

export default Loader;
