import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = { number: 5 };
  render() {
    const { number, name } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {name} {number}
        </header>
      </div>
    );
  }
}

export default App;
