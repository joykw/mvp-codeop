import React, { Component } from "react";
//import "./styling/Footer.scss";
import { Link } from "react-router-dom";


export default class Footer extends Component {
  render() {
    return (
      <div>

        <div className="footer">

          <div>
            <p>Made with <i className="fas fa-heart" /> in Barcelona</p>
          </div>
          <div>
            <Link to="/about">About Us</Link>
          </div>

        </div>
      </div>
    );
  }
}