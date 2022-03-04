import React from "react";

import logo from "../eudaimoniaLogoERound.png";

import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Eudaimonia logo" width={100} height={100} />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Conjuntos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Corpiños
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Bombachas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <CartWidget class="justify-content-left" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
