import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    let counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Hello World ({this.state.counter})
      </button>
    );
  }
}
