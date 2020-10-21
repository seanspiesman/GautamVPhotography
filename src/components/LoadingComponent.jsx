import React from "react";

const LoadingComponent = () => {
  return (
    <div className="text-center" style={{ marginTop: "30%" }}>
      <div
        className="spinner-border text-primary"
        style={{ width: 50, height: 50 }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
