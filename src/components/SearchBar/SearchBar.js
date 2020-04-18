import React, { Component } from "react";
import "./SearchBar.css";

import MapContainer from "../MapContainer";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      matchedData: []
      // location: "",
      // sortBy: "best_match"
    };

    // this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    this.props.items.map(item => {
      // let services = this.props.items.filter(
      //   e => e.service === this.state.term
      // );
      if (this.state.term === item.service) {
        console.log(this.state.matchedData);
        this.setState({
          matchedData: [...this.state.matchedData, item]
        });
      }
    });
  };

  // Handle State Changes

  // handleSearch(event) {
  //   this.props.google(
  //     this.state.items.filter((element, index) => <li key={index}></li>)
  //   );
  //   event.preventDefault();
  // }

  handleChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    
    return (
      <div className="SearchBar">
        <input
          onChange={e => this.handleChange(e)}
          placeholder="Search By Service"
          value={this.state.term}
        />
        {/* <input onChange={this.handleChange} placeholder="Search By Service" /> */}
        
        <div className="SearchBar-submit">
          <button onClick={this.handleSubmit}>Search</button>
        </div>
        <div>
          {this.state.matchedData[0] && (
            <div>
              <h3 id="lawfirm">{this.state.matchedData[0].name}</h3>

              <h4 id="lawfirm">{this.state.matchedData[0].address}</h4>

              <h4 id="lawfirm">{this.state.matchedData[0].fee}</h4>
            </div>
          )}
        </div>
        <div>
        <MapContainer />;
        </div>
        {/* <MapContainer matchedData={this.state.matchedData} /> */}
      </div>
    
    );
  }
}

export default SearchBar;
