import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"; //to provide map that pins locations
import items from "../items.json";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow:true,
      activeMarker: {},
      // selectedPlace: {}

      lawfirms:[{lat:-1.2921, lng: 36.8219},
                {latitude: -1.283630, longitude: 36.820430},
                {latitude: -1.253742, longitude: 36.805302},
                {latitude: -1.337094, longitude: 36.723084},
                {latitude: -1.286447, longitude: 36.825895},
                {latitude: -1.284993, longitude: 36.821821}]

    };
   }
  
  displayMarkers = () => {
    return this.state.lawfirms.map((lawfirm, id) => {
      return <Marker key={id} id={id} position={{
       lat: lawfirm.lat,
       lng: lawfirm.lng
     }}
     onClick={() => console.log({id})} />
    })
  }
 



  // componentDidMount() {
  //   this.setState({ lawfirms: items.data });
  // }

  render() {
   
    return (
      <div>
       
    
   
        <div className="map">
          <Map
            google={this.props.google}
           onClick={this.onMapClicked}
            style={{ 
              width: "100%", 
              height: "80%",
              position: "relative" }}
            initialCenter={{ lat: -1.2921, lng: 36.8219}}
            className={"map"}
            zoom={15}
          >
            

            <Marker
              title={"Aguko Osman & Co. Advocates"}
              address={"Pioneer House, 5th flr, 501, Moi Ave"}
              position={{ lat: -1.283630, lng: 36.820430 }}
              Fee={"60€/hr"}
             
            />

            <Marker
              title={"Anjarwalla & Khanna"}
              address={"ALN House, Eldama Ravine Close"}
              position={{ lat: -1.253742, lng: 36.805302 }}
              Fee={"100€/hr"}
             // icon='http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png'
             
            />
           

            <Marker
              title={"Ngugi Mburu Advocates"}
              address={"The Watermark Business Park, 1st flr Ndege Road, Karen"}
              position={{ lat: -1.337094, lng: 36.723084 }}
              Fee={"50€/hr"}
             
            />

            <Marker
              title={"JA Makau & Co. Advocates"}
              address={"Commerce House 6th flr, Moi Ave"}
              position={{ lat: -1.286447, lng: 36.825895 }}
              Fee={"30€/hr"}
             
            />


              <Marker
              title={"Ahmednasir, Abdikadir & Co. Advocateso. Advocates"}
              address={"CBA Building 2nd flr, Standard Street"}
              position={{ lat: -1.284993, lng: 36.821821 }}
              Fee={"30€/hr"}
             
            />


           
            <InfoWindow onClose={this.onInfoWindowClose}>
           {/* <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>   */}
            </InfoWindow>
             {this.displayMarkers()} 
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



