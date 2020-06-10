import React, { Component, Fragment } from "react";

class Events extends Component {
  e;

  handleClick = (e,m) => {
      console.log(m);
      console.log(e.target);
  };

  render() {
    return (
      <Fragment>
        <h1>Events</h1>
        <button onClick={(e) =>this.handleClick(e,'hello')}>Click me!</button>
      </Fragment>
    );
  }
}

export default Events;
