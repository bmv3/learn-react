import React, { Component } from "react";

class Text extends Component {
  render() {
    return <p>{this.props.content}</p>;
  }
}

class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default class CounterButton extends Component {
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
      <div className="counter">
        <Button onClick={this.handleClick}>
          {this.state.counter === 0 ? (
            <Text content="Click me! Please!" />
          ) : (
            <Text content={`Clicked: ${this.state.counter}`} />
          )}
        </Button>
      </div>
    );
  }
}
