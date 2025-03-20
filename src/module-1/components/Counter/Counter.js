import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };
  }

  increment = () => this.setState({ value: this.state.value + 1 });
  decrement = () => this.setState({ value: this.state.value - 1 });

  render() {
    return React.createElement(
      "div",
      { style: { margin: "20px" } },
      React.createElement("div", { style: { marginBottom: "10px", fontWeight: 600 } }, "Counter"),
      React.createElement("div", { style: { marginBottom: "10px" } }, `Current value: ${this.state.value}`),
      React.createElement(
        "button",
        { onClick: this.decrement, style: { marginRight: "10px" } },
        "-"
      ),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}

export default Counter;