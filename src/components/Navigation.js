import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">H A N</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
          <ul className="navbar-nav navbar-nav-scroll" style={{ "--bs-scroll-height": "100px;" }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">tab1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">tab2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">tab3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">tab4</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
