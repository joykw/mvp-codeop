import React, { Component } from "react";
import items from "./items.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

//I want to create an input form with a search button - below resized (small) map
//to resize the map, I need to put everything is a div and then create a class and input width as 400px

//I want a list of law firms that shows their: location,fee, availability status, maybe sample services
//I need to make the search button work as a search button
//use to do app to create a button on the side of each firm called 'book' or 'book appointment'
//let lawFirm;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({ value: event.target.items });
  };

  handleSubmit = event => {
    alert("search " + this.state.items);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="search" value="Search" />
        </form>
        <h1>LawyerUp!</h1>
        <ul>
          {this.state.items.map((element, index) => (
            <li key={index}>
              {/* //{element.image} how to reference images from links on items.json */}
              {element.name},{element.address},{element.fee}
            </li>
          ))}
        </ul>
        <button
          className="btn btn-default"
          //style={buttonStyle}
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
        <div className="map" width="400px">
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>{" "}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(App);
