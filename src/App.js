import React, { Component } from "react";
import items from "./items.json";
import { GoogleApiWrapper } from "google-maps-react";

//let lawFirm;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items
    };
  }

  render() {
    return (
      <div>
        <div>LawyerApp</div>
        <ul>
          {this.state.items.map((element, index) => (
            <li key={index}>{element.name}</li>
          ))}
        </ul>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default App;

export default GoogleApiWrapper({
  apiKey: "AIzaSyANr7waOlZfZsBlXze1mgfbogvptrp6N5Y"
})(App);
