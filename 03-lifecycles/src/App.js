import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ posts: data });
    window.addEventListener("scroll", () => console.log("SCROLL"));
  }

  render() {
    const { posts } = this.state;

    if (true) {
      return (
        <div className="App">
          <header className="App-header">
            <Header title="Lifecycle" />
            <div>
              {posts.map(({ title, body, id }) => (
                <Fragment key={id}>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </Fragment>
              ))}
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
