import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // const { authneticated } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        <h1 id="homepage-title">
          Gautam <br /> Venkataraman
          <br />
          <p
            className="text-muted"
            style={{ fontSize: "40%", fontFamily: '"Noto Serif", serif' }}
          >
            PHOTOGRAPHY
          </p>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item dropdown link-text">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              LANDSCAPES
            </div>
            <div
              className="dropdown-menu text-center fade-down"
              style={{ padding: "0px" }}
              aria-labelledby="navbarDropdown"
              role="button"
            >
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/Alaska"}
              >
                ALASKA
              </Link>
              <Link className="dropdown-item dd-link-text" to={"/Albums/Japan"}>
                JAPAN
              </Link>
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/PacificNW"}
              >
                PACIFIC NW
              </Link>
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/Rockies"}
              >
                ROCKY MOUNTAINS
              </Link>
              <Link className="dropdown-item dd-link-text" to={"/Albums/Utah"}>
                UTAH
              </Link>
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/WestUS"}
              >
                WEST US
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown link-text">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              CITYSCAPES
            </div>
            <div
              className="dropdown-menu fade-down text-center"
              style={{ padding: "0px" }}
              aria-labelledby="navbarDropdown"
              role="button"
            >
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/Pacific"}
              >
                PACIFIC
              </Link>
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/America"}
              >
                AMERICA
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown link-text">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              FLYING
            </div>
            <div
              className="dropdown-menu fade-down text-center"
              style={{ padding: "0px" }}
              aria-labelledby="navbarDropdown"
              role="button"
            >
              <Link className="dropdown-item dd-link-text" to={"/Albums/C130"}>
                C-130J
              </Link>
              <Link
                className="dropdown-item dd-link-text"
                to={"/Albums/Aerial"}
              >
                AERIAL
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link link-text" as={NavLink} to={"/Blog"}>
              RECENT PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-text" as={NavLink} to={"/Contact"}>
              ABOUT/CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
