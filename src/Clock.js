import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      cirrentTime: new Date().toLocaleString()
    };
  }

  clockLauncher() {
    console.log("time is changing");
    // setInterval(() => {
    //   this.setState({
    //     cirrentTime: new Date().toLocaleString()
    //   });
    // }, 1000);
  }

  render() {
    return <h1>{this.state.cirrentTime}</h1>;
  }
}
