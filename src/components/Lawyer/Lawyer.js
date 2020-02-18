import React, { Component } from "react";
import "./Lawyer.css";

class Lawyer extends React.Component {
  render() {
    return (
      <div className="Lawyer">
        <div className="image-container">
          <img src={this.props.lawyer.imgSrc} alt={this.props.lawyer.name} />
        </div>
        <h2>{this.props.lawyer.name}</h2>
        <div className="Lawyer-information">
          <div className="Lawyer-address">
            <p>{this.props.address}</p>
            <p>{this.props.lawyer.city}</p>
            <p>
              {this.props.lawyer.county}, {this.props.lawyer.zipCode}
            </p>
          </div>
          <div className="Lawyer-fee">
            <h3>{this.props.lawyer.fee} €</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Lawyer;
