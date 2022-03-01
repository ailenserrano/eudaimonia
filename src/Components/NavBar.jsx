import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../eudaimoniaLogoERound.png" alt="Eudaimonia logo" />
          </a>
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
      </nav>
    </div>
  );
}

export default NavBar;
