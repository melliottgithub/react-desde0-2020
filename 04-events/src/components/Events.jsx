import React, { Component, Fragment } from "react";
import Button from "./Button";

class Events extends Component {
  e;

  handleClick = (e) => {
    console.log(e);
  };

  render() {
    return (
      <Fragment>
        <h1>Events</h1>
        <Button text="Click Me" onEventClick={this.handleClick}>
          Click me!
        </Button>
      </Fragment>
    );
  }
}

export default Events;
