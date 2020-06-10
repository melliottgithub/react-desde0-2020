import React, { Component } from "react";
import "./App.css";
import ComponentWillUnmount from "./components/ComponentWillUnmount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ComponentWillUnmount />{" "}
        </header>
      </div>
    );
  }
}

export default App;
