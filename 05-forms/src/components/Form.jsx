import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    name: "Mike",
    gender: "man",
    language: "en",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <p>{JSON.stringify(this.state)}</p>

        <h1>Forms</h1>
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form__field">
          <label className="form__label form__label--radio" htmlFor="man">
            Man
          </label>
          <input
            className="form__input"
            type="radio"
            id="man"
            name="gender"
            onChange={this.handleChange}
            value="man"
          />

          <label className="form__label form__label--radio" htmlFor="woman">
            Woman
          </label>
          <input
            className="form__input"
            type="radio"
            id="woman"
            name="gender"
            onChange={this.handleChange}
            value="woman"
          />

          <label className="form__label form__label--radio" htmlFor="other">
            Other
          </label>
          <input
            className="form__input"
            type="radio"
            id="other"
            onChange={this.handleChange}
            name="gender"
            value="other"
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="languaje">
            Language
          </label>
          <select name="language" id="language">
            <option value="es">Spanish</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="terms">
            Terms and conditions
          </label>
          <input
            className="form__input"
            type="checkbox"
            id="other"
            name="gender"
          />
        </div>
        <input className="form__submit" type="submit" value="send" />
      </form>
    );
  }
}

export default Form;
