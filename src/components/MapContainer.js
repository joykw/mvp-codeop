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
                {latitude: -1.285268, longitude: 36.818377},
                {latitude: -1.262349, longitude: 36.766421},
                {latitude: -1.286447, longitude: 36.825895},
                {latitude: -1.285086, longitude: 36.821813}]

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

//   let facilityPins = this.props.facilities.map((facility, index) ={
//     if (facility.latitude === null || facility.longitude === null){
//       return null
//     } else {
//       return <FacilityPin 
//               onClick={()=>this.setPinAsCenter(facility)}
//               key={index} 
//               onChildMouseEnter={this.onChildMouseEnter}
//               onChildMouseLeave={this.onChildMouseLeave} 
//               handlePinClick={this.handleOnClick} 
//               facility={facility}
//               hover={this.state.hover} 
//               lat={facility.latitude} 
//               lng={facility.longitude} 
//              />
//     }
//  }
 



  // componentDidMount() {
  //   this.setState({ lawfirms: items.data });
  // }

  render() {
   
    return (
      <div>
       
    
   
        <div className="map">
          <Map
          bootstrapURLKeys={{
            key: process.env.API_KEY, 
            language: 'en'
         }}
            google={this.props.google}
           onClick={this.onMapClicked}
           onChildMouseEnter={this.onChildMouseEnter}
           onChildMouseLeave={this.onChildMouseLeave}
            style={{ 
              width: "100%", 
              height: "69%",
              position: "relative" }}
            initialCenter={{ lat: -1.2921, lng: 36.8219}}
            center={this.state.center}
            className={"map"}
            zoom={15}
          >
            

            <Marker
              title={"Aguko Osman & Co. Advocates"}
              address={"Pioneer House, 5th flr, 501, Moi Ave"}
              position={{ lat: -1.283630, lng: 36.820430 }}
              Fee={"60€/hr"}
              Status={"available"}
             
            />

            <Marker
              title={"Simba & Simba Advocates"}
              address={"Finance House, 6th Flr, Loita Street"}
              position={{ lat: -1.285268, lng: 36.818377 }}
              Fee={"70€/hr"}
           

             // icon='http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png'
             
            />
           

            <Marker
              title={"Dentons Hamilton Harrison & Matthews"}
              address={"Delta Office Suites Off Waiyaki Way Block A, 1st Floor"}
              position={{ lat: -1.262349, lng: 36.766421 }}
              Fee={"50€/hr"}
             
             
            />

            <Marker
              title={"JA Makau & Co. Advocates"}
              address={"Commerce House 6th flr, Moi Ave"}
              position={{ lat: -1.286447, lng: 36.825895 }}
              Fee={"30€/hr"}
             
            />


              <Marker
              title={"Ahmednasir Abdikadir & Co. Advocates"}
              address={"CBA Building 2nd flr, Standard Street"}
              position={{ lat: -1.285086, lng: 36.821813 }}
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



