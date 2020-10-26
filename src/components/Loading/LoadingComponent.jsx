import React from "react";
import "./loadingcomp.css";

const LoadingComponent = () => {
  return (
    <>
      <div className="text-center fade-in-loader" style={{ marginTop: "30%" }}>
        <div className="loader"></div>
      </div>
    </>
  );
};

export default LoadingComponent;
