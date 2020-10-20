import React from "react";

const Homepage = () => {
  return (
    <>
      <div
        className="container text-center"
        style={{ color: "white", fontFamily: '"Shadows Into Light", cursive' }}
      >
        <h1>Selected Works</h1>
        <div className="row">
          <div className="col-lg-6">
            <img
              style={{ width: "100%" }}
              alt=""
              src="https://images.unsplash.com/photo-1517516482190-5a674bb7964d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            />
            <p>this is one of my favorite images because</p>
            <img
              style={{ width: "100%", marginTop: 200 }}
              alt=""
              src="https://images.unsplash.com/photo-1524429656589-6633a470097c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
            <p>This is a waterfall</p>
          </div>
          <div className="col-lg-6">
            <img
              style={{ width: "100%", marginTop: 50 }}
              alt=""
              src="https://images.unsplash.com/photo-1519582149095-fe7d19b2a3d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80"
            />
            <p>This is a waterfall</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
