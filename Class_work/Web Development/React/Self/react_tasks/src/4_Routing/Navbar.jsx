import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink className="navlink active" to="/" href="#">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink" to="/about" href="#">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink" to="/contact" href="#">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
