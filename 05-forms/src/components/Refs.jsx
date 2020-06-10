import React from "react";
import { Component, Fragment } from "react";
import { createRef } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputText = createRef();
  }

  handleFocus = () => {
    this.inputText.current.focus();
  };

  render() {
    return (
      <Fragment>
        <input type="text" ref={this.inputText} />
        <button onClick={this.handleFocus}>Focus</button>
      </Fragment>
    );
  }
}

export default Refs;
