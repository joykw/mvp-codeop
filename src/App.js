import React, { Component } from "react";
import items from "./items.json";

let lawFirm;

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
  
</div>

        <ul>
          {this.state.items.map((element, index) => (<li key={index}> <div class="card" style="width: 18rem;">
            <div class="container">
              <div class="row">
                <div class="col -md-3 col sm-6">
                  <div class="card">
                    <div class="card-block">
                      <div class="card-title">
                        <h4>{element.name}</h4>
                      </div>
                      <div class
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>{element.name}</li>
          ))}
        </ul>
      
   
    };
}

export default App;
