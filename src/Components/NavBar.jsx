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
        <div className="container d-inline-flex justify-content">
          <Link to="/">
            <img src={logo} alt="Eudaimonia logo" width={100} height={100} />
          </Link>
          <div class="d-flex justify-content-start" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/productos/conjuntos">Conjuntos</Link>
              </li>
              <li class="nav-item">
                <Link to="/productos/corpiños">Corpiños</Link>
              </li>
              <li class="nav-item">
                <Link to="/productos/bombachas">Bombachas</Link>
              </li>
            </ul>
          </div>
          <div className="btn btn-outline-secondary">
            <CartWidget class="justify-content-left" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
