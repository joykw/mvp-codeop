import React, { Component } from "react";
import "./SearchBar.css";
// import MapContainer from "../MapContainer";

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
      if (this.state.term === item.service) {
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
    //<Map />;
    return (
      <div className="SearchBar">
       
        <input
          onChange={e => this.handleChange(e)}
          placeholder="Search By Service"
          value={this.state.term}
        />
        {/* <input onChange={this.handleChange} placeholder="Search By Service" /> */}
        {/* <input onChange={this.handleLocationChange} placeholder="Where?" /> */}
        <div className="SearchBar-submit">
          <button onClick={this.handleSubmit}>Search</button>
        </div>
        {/* <MapContainer matchedData={this.state.matchedData} /> */}
      </div>
    );
  }
}

export default SearchBar;
