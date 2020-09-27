import React from "react";
import { Link, NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="homepage-background text-center"></div>
      <br />
      <div className="container">
        <div className="spacer-div"></div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <img
              className="inside-pic"
              src="assets/GautamPic1.jpg"
              alt="Gautam"
            />
          </div>
          <div className="col-md-8">
            <br />
            <h4> Hi I'm Gautam</h4>
            <p style={{ fontFamily: '"Noto Serif JP", serif' }}>
              I'm currently stationed and living near Tokyo Japan. I am
              currently an officer in the United States Air Force, working
              aboard a C-130.
            </p>
            <br />
            <div className="text-right">
              <Link className="home-about-text" to={"/About"}>
                {" "}
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className="spacer-div"></div>
        <br />
        <div className="row home-page-image">
          <div className="col-md-4 text-center">
            <div className="container">
              <div className="row">
                <img
                  as={NavLink}
                  src="assets/Airforce1.jpg"
                  style={{ width: "100%" }}
                  alt="C130 Cockpit"
                />
                <Link
                  to={"/Albums/Adventure"}
                  className="centered-text home-page-image"
                  style={{ top: "25%" }}
                >
                  Adventure
                </Link>
              </div>
              <br />
              <div className="row">
                <img
                  src="assets/Adventure1.jpg"
                  style={{ width: "100%" }}
                  alt="C130 Cockpit"
                />
                <Link
                  to={"/Albums/Japan"}
                  className="centered-text home-page-image"
                  style={{ top: "75%" }}
                >
                  Japan
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <img
              src="assets/japan1.jpg"
              style={{ minHeight: "100%", maxWidth: "100%" }}
              alt="Trees"
            />
            <Link
              to={"/Albums/India"}
              className="centered-text home-page-image"
              style={{ top: "50%" }}
            >
              India
            </Link>
          </div>
        </div>
      </div>
      <br />
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
};

export default Homepage;
