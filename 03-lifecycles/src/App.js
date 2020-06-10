import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
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

  async componentDidUpdate(prevProps,prevState) {
    if (prevState.id !== this.state.id) {
       const { id } = this.state;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    this.setState({ post: data });
      
    }
    
  }

  render() {
    const { post } = this.state;

    if (true) {
      return (
        <div className="App">
          <header className="App-header">
            <Header title="Lifecycle" />
            <div>
              {/* {posts.map(({ title, body, id }) => (
                <Fragment key={id}>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </Fragment>
              ))} */}
              {
                <Fragment key={this.state.id}>
                  <button onClick={this.onClickHandler}>Next</button>
                  <h2>Post con id: {post.id}</h2>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </Fragment>
              }
            </div>{" "}
          </header>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
