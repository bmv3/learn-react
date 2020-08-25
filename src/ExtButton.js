import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return <button>{this.props.buttonLable}</button>;
  }
}

Button.propTypes = {
  buttonLable: PropTypes.string.isRequired
};

Button.defaultProps = { buttonLable: "submit" };

export default class ExtButton extends Component {
  render() {
    return <Button buttonLable="Click Me!" />;
  }
}
