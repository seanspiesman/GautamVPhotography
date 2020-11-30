import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="container text-center homepage-text">
        <h1>Selected Works</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="image-item-one">
              <div className="hompage-one-overflow">
                <Link to="/Albums/Aerial">
                  <img
                    id="homepage-image-one"
                    alt=""
                    src="https://images.unsplash.com/photo-1517516482190-5a674bb7964d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                  />
                </Link>
              </div>{" "}
              <br />
              <p>
                This is one of my favorite shots to this date. It shows a P51
                flying next to a F-22 fighter jet. It symbolizes the US's
                logevity as a global leader.
              </p>
            </div>

            <div className="image-item-three">
              <div className="hompage-three-overflow">
                <Link to="/Albums/Rockies">
                  <img
                    id="homepage-image-three"
                    alt=""
                    src="https://images.unsplash.com/photo-1524429656589-6633a470097c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  />
                </Link>
              </div>
              <br />

              <p>
                I was hiking in Colorado when I came across this great location
                to take a photo of the sunset. The rippled reflection of the sun
                and scenery make this one of my greatest accidents to stumble
                upon.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-item-two">
              <div className="hompage-two-overflow">
                <Link to="/Albums/Alaska">
                  <img
                    id="homepage-image-two"
                    alt=""
                    src="https://images.unsplash.com/photo-1519582149095-fe7d19b2a3d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80"
                  />
                </Link>
              </div>{" "}
              <br />
              <p>
                During my time in Alaska I took a ton of photos. While this one
                doesn't have the greatest scenery or lighting, it teaches us
                that we are so small compared to nature and we must respect it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
