import React, { Component } from "react";
import Lawyer from "../Lawyer/Lawyer";
import "./Lawfirms.css";

export class Lawfirms extends Component {
  render() {
    return (
      <div className="Lawfirms">
        this are the lawfirms
        {/* {this.props.lawfirms.map(function(lawyer, i) {
          return <Lawyer key={lawyer.id} lawyer={lawyer} />;
        })} */}
      </div>
    );
  }
}

export default Lawfirms;
