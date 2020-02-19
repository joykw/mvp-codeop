import React, { Component } from "react";
//import Lawfirms from "./components/Lawfirms/Lawfirms"; //I want this to handle list of firms from dataset(instead of list made in items.json)
import SearchBar from "./SearchBar/SearchBar"; //to provide a searchbar that links to the map
import items from ".././items.json"; //this was an alternative to using a provided dataset
import ".././App.css";
// import { MapContainer } from "./MapContainer";

class App extends Component {
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
        <div className="header">
          <h1>
            <strong>LawyerUp!</strong>
          </h1>
        </div>

        <button className="btn btn-default" onClick={this.props.handleClick}>
          {this.props.label}
        </button>
        <SearchBar items={this.state.items} />
        {/* <MapContainer /> */}
      </div>
    );
  }
}

export default App;
