import React, { Component } from "react";
import Header from "./Header";

class lifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      post: [],
    };
  }

  async componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    const { id } = this.state;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    this.setState({ post: data });
    window.addEventListener("scroll", () => console.log("SCROLL"));
  }

  onClickHandler = () => {
    this.setState({ id: this.state.id + 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      const { id } = this.state;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      this.setState({ post: data });
    }
  }

  render() {
    const { post } = this.state;

    return (
      <div key={this.state.id}>
        <Header title="Lifecycle" />

        <button onClick={this.onClickHandler}>Next</button>
        <h2>Post con id: {post.id}</h2>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default lifeCycle;
