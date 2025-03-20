import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0
    };
  }

  increment = () => this.setState({ value: this.state.value + 1 });
  decrement = () => this.setState({ value: this.state.value - 1 });

  render() {
    return React.createElement(
      'div',
      { className: 'counter' },
      React.createElement('div', { className: 'counter__title' }, 'Counter'),
      React.createElement('div', { className: 'counter__value' }, `Current value: ${this.state.value}`),
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

export default Counter;
