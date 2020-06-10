import React, { Component, Fragment } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  };

  render() {
    return (
      <Fragment>
        <h1>Events</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </Fragment>
    );
  }
}

export default Events;
