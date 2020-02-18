import React, { Component } from "react";
import Lawfirms from "./components/Lawfirms/Lawfirms"; //I want this to handle list of firms from dataset(instead of list made in items.json)
// import Lawyer from "./components/Lawyer/Lawyer"; //to handle/iterate through individual firms as they upload profil
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"; //to provide map that pins locations
import SearchBar from "./components/SearchBar/SearchBar"; //to provide a searchbar that links to the map
import items from "./items.json"; //this was an alternative to using a provided dataset
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items //intending it to be a list of lawyers/firms
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
        <div>
          <h1>LawyerUp!</h1>
        </div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="search" value="Search" />
        </form> */}
        {/* <h1>LawyerUp!</h1> */}
        {/* //I deleted items.json which had the list of items-what should then be referenced here? */}
        <ul>
          {this.state.items.map((element, index) => (
            <li key={index}>
              {/* //{element.image} how to reference images from links on items.json */}
              {element.name}, {element.address},{element.fee}
            </li>
          ))}
        </ul>{" "}
        <div></div>
        <button
          className="btn btn-default"
          //style={buttonStyle}
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
        <SearchBar />
        <div className="map">
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(App);
