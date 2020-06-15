import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <span>
        <Link to="/">
          <img id="nav-logo" src="./assets/images/plumbum-main.png" alt="" />
        </Link>
      </span>
      <ul className="nav-links">
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/projects">
          <li>My Projects</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
