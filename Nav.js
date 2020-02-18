import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { MapContainer } from "./MapContainer";
//Using the nav component outside the route so the top bar remains unchanged without being rerendered
//this is different from dynamic routes
function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>Home</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/map">
          
          <li>Map</li>
        </Link>
        <Link style={navStyle} to="/Lawfirms">
          <li>Lawfirms</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
