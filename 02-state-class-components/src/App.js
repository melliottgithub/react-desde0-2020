import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = { number: this.props.number };

  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  handleReset = () => {
    this.setState({ number: 0 });
  };

  render() {
    const { number, name } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          Number: {this.state.number}
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </header>
      </div>
    );
  }
}

App.defaultProps = {number: 0}

export default App;
