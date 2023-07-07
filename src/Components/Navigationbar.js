import React from "react";
import { NavLink } from "react-router-dom";
import '../style.css';

export default function Navigationbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <NavLink className="navbar-brand" to={"/"}>
          Weather-Chart
        </NavLink>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/feature"}>
                Features
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
