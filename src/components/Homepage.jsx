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
              id="homepage-image-one"
              alt=""
              src="https://images.unsplash.com/photo-1517516482190-5a674bb7964d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <img
              id="homepage-image-three"
              alt=""
              src="https://images.unsplash.com/photo-1524429656589-6633a470097c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              id="homepage-image-two"
              alt=""
              src="https://images.unsplash.com/photo-1519582149095-fe7d19b2a3d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80"
            />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
