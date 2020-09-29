import React from "react";
import { Link, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Homepage = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1536246766649-404ea165429c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container-fluid">
        <br />
        <div className="row home-page-image">
          <div className="col-md-4 text-center">
            <div className="container">
              <div className="row view overlay zoom">
                <img
                  className="img-fluid"
                  as={NavLink}
                  src="assets/Airforce1.jpg"
                  style={{ width: "100%" }}
                  alt="C130 Cockpit"
                />
                <Link
                  to={"/Albums/Adventure"}
                  className="centered-text home-page-image"
                  style={{ top: "50%" }}
                >
                  Adventure
                </Link>
              </div>
              <br />
              <div className="row view overlay zoom">
                <img
                  className="img-fluid"
                  src="assets/Adventure1.jpg"
                  style={{ width: "100%" }}
                  alt="C130 Cockpit"
                />
                <div className="flex-center">
                  <Link
                    to={"/Albums/Japan"}
                    className="centered-text home-page-image"
                    style={{ top: "50%" }}
                  >
                    Japan
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-center ">
            <div className="view overlay zoom">
              <img
                className="img-fluid"
                src="assets/japan1.jpg"
                style={{ height: "100%", width: "100%", padding: "0px" }}
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
      </div>
      <br />
    </>
  );
};

export default Homepage;
