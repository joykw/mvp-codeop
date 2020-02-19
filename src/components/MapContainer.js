import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"; //to provide map that pins locations
import items from "../items.json";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firms: []
      
       //intending it to be a list of lawyers/firms
    };
  }

  // componentDidMount() {
  //   this.setState({ firms: items.data });
  // }

  render() {
    
    return (
      <div>
        <div className="map">
          <Map
            google={this.props.google}
            //onClick={this.onMapClicked}
            style={{ width: "100%", height: "100%", position: "relative" }}
            className={"map"}
            zoom={14}
          >
            <Marker
              title={"Aguko Osman & Co. Advocates"}
              Fee={"60€/hr"}
              position={{ lat: 37.778519, lng: -122.40564 }}
            />
            <Marker
              name={"Dolores"}
              position={{ lat: 37.759703, lng: -122.428093 }}
            />
            <Marker />
            <Marker
              name={"Your position"}
              position={{ lat: 37.762391, lng: -122.439192 }}
            />
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
            </InfoWindow>
          </Map>
        </div>
        <div>
          {this.props.matchedData && (
            <div>
              {this.props.matchedData.name}

              {this.props.matchedData.address}
            </div>
          )}
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(MapContainer);
