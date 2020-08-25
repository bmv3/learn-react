import React, { Component } from "react";

export default class Form extends Component {
  handleSubmit(event) {
    console.log("Submit");
  }

  handleChange(event) {
    // console.log("Change");
    console.log(`Value: ${event.target.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <input type="submit" />
      </form>
    );
  }
}
