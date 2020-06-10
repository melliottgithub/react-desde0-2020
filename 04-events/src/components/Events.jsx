import React, { Component, Fragment } from "react";

class Events extends Component {
  e;

  handleClick = (e,m) => {
      console.log(e);
      console.log(m);
  };

  render() {
    return (
      <Fragment>
        <h1>Events</h1>
        <button onClick={this.handleClick.bind(this,'hello')}>Click me!</button>
      </Fragment>
    );
  }
}

export default Events;
