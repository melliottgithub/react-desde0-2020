import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  render() {
    if (true) {
      return (
        <div className="App">
          <header className="App-header">
            <Header title="Lifecycle" />
            <h2>Number of state: {this.state.number}</h2>
          </header>
        </div>
      );
    }
    else { return null }
  }
}

export default App;