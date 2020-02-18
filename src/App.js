import React, { Component } from "react";
// import Lawfirms from "./components/Lawfirms/Lawfirms"; //I want this to handle list of firms from dataset(instead of list made in items.json)
import SearchBar from "./components/SearchBar/SearchBar"; //to provide a searchbar that links to the map
import items from "./items.json"; //this was an alternative to using a provided dataset
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Lawfirms from "./components/Lawfirms/Lawfirms";
import Home from "./components/Home";

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/lawfirms">Lawfirms</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/map">
              <MapContainer />
            </Route>
            <Route path="/lawfirms">
              <Lawfirms />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
