import React from "react";
import logo from "../eudaimoniaLogoERound.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        role="navigation"
      >
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="Eudaimonia logo" width={100} height={100} />
          </Link>
          <div id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item home-button">
                <Link to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/productos/corpiños">Corpiños</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/bombachas">Bombachas</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/bodys">Bodys</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/packs">Packs</Link>
              </li>
            </ul>
          </div>
          <div>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
