import React, { Component, Fragment } from "react";
import Button from "./Button";

class Events extends Component {
  handleClick = (e) => {
    console.log(e);
  };

  render() {
    return (
      <Fragment>
        <h1>Events</h1>
        <Button text="Click me"></Button>
      </Fragment>
    );
  }
}

export default Events;
