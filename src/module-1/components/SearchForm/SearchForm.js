import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || '',
    };
  }

  onSearch = () => this.printSearchValue(this.state.value);

  onChange = (event) => this.setState({ value: event.target.value });

  onKeyDown = ({ key, target }) => {
    if (key === 'Enter') {
      this.printSearchValue(target.value);
    }
  };

  printSearchValue = (value) => console.log(`Search value: ${value}`);

  render() {
    return React.createElement(
      "div",
      { style: { margin: "20px" } },
      React.createElement("div", { style: { marginBottom: "10px", fontWeight: 600 } }, "SearchForm"),
      React.createElement(
        "input",
        {
          type: 'text',
          defaultValue: this.state.value,
          onKeyDown: this.onKeyDown,
          onChange: this.onChange,
          style: { marginRight: "10px" }
        },
      ),
      React.createElement("button", { onClick: this.onSearch }, "SEARCH")
    );
  }
}

export default SearchForm;