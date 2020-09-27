import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light transparent">
        <div className="navbar-collapse w-100 dual-collapse2 order-1 order-md-0">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
              <Link className="nav-link link-text" as={NavLink} to={"/About"}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown link-text">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Albums
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item link-text"
                  to={"/Albums/Adventure"}
                >
                  Adventure
                </Link>
                <Link className="dropdown-item link-text" to={"/Albums/India"}>
                  India
                </Link>
                <Link className="dropdown-item link-text" to={"/Albums/Japan"}>
                  Japan
                </Link>
              </div>
              {/* <Link className="nav-link link-text" as={NavLink} to={"/Album"}>
                Album
              </Link> */}
            </li>
          </ul>
        </div>
        <div className="mx-auto my-2 order-0 order-md-1 position-relative">
          <Link to={"/"} id="homepage-title">
            <h1 style={{ color: "black" }}>
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
        </div>
        <div className="navbar-collapse w-100 dual-collapse2 order-2 order-md-2">
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item">
              <Link className="nav-link link-text" as={NavLink} to={"/Blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-text" as={NavLink} to={"/Contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
