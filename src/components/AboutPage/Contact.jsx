import React from "react";
import LoadingComponent from "../Loading/LoadingComponent";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="about-page-title text-center">Contact</h1>
        <p className="about-page-text">
          Aint nobody got a reason to contact me at the moment, I'm an
          undercover operative so.... yea
          <LoadingComponent />
        </p>
      </div>
    </>
  );
};

export default Contact;
