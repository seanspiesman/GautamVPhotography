import React from "react";
import LoadingComponent from "../Loading/LoadingComponent";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="about-page-title text-center">Contact</h1>
        <p className="about-page-text">
          Aint nobody got a reason to contact me at the moment, I'm an
          undercover operative so.... yea
        </p>
        <LoadingComponent />
      </div>
    </>
  );
};

export default Contact;
