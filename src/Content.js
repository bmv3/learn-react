import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handlerTextarea = this.handlerTextarea.bind(this);
    this.handlerSelect = this.handlerSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        ember: false
      },
      checkboxGroup: {
        angular: false,
        react: true,
        ember: false
      },
      textArea: "text",
      selectedValue: "ember"
    };
    // this.helper();
  }

  handleRadio(event) {
    let radioGroup = {
      angular: false,
      react: false,
      ember: false
    };
    radioGroup[event.target.value] = event.target.checked;
    this.setState({ radioGroup: radioGroup });
  }

  handleCheckbox(event) {
    let checkboxGroup = Object.assign(this.state.checkboxGroup);
    checkboxGroup[event.target.value] = event.target.checked;
    this.setState({ checkboxGroup: checkboxGroup });
  }

  handlerTextarea(event) {
    this.setState({ textArea: event.target.value });
  }

  handlerSelect(event) {
    this.setState({ selectedValue: event.target.value });
  }

  handleSubmit() {
    console.log(this.state);
  }

  helper() {
    setInterval(() => {
      console.log(this.state);
    }, 1000);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="radio"
            value="angular"
            checked={this.state.radioGroup.angular}
            onChange={this.handleRadio}
          />
          <input
            type="radio"
            value="react"
            checked={this.state.radioGroup.react}
            onChange={this.handleRadio}
          />
          <input
            type="radio"
            value="ember"
            checked={this.state.radioGroup.ember}
            onChange={this.handleRadio}
          />
        </div>

        <div>
          <input
            type="checkbox"
            value="angular"
            checked={this.state.checkboxGroup.angular}
            onChange={this.handleCheckbox}
          />
          <input
            type="checkbox"
            value="react"
            checked={this.state.checkboxGroup.react}
            onChange={this.handleCheckbox}
          />
          <input
            type="checkbox"
            value="ember"
            checked={this.state.checkboxGroup.ember}
            onChange={this.handleCheckbox}
          />
        </div>
        <div>
          <textarea
            value={this.state.textArea}
            onChange={this.handlerTextarea}
          ></textarea>
        </div>
        <div>
          <select
            value={this.state.selectedValue}
            onChange={this.handlerSelect}
          >
            <option value="angular">angular</option>
            <option value="react">react</option>
            <option value="ember">ember</option>
          </select>
        </div>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
        {/* <input type="submit" /> */}
      </form>
    );
  }
}
