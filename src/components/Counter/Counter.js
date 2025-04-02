import React, { Component } from 'react';
import './Counter.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
      cta: props.cta || false
    };
  }

  increment = () => this.setState((prevState) => ({ value: prevState.value + 1 }));
  decrement = () => this.setState((prevState) => ({ value: prevState.value - 1 }));

  render() {
    return React.createElement(
      'div',
      { className: 'counter' },
      React.createElement('div', { className: 'counter__title' }, 'Counter'),
      React.createElement(
        'div',
        { className: 'counter__value' },
        `Current value: ${this.state.value}`
      ),
      React.createElement(
        'button',
        { onClick: this.decrement, className: classNames({ cta: this.state.cta }) },
        '-'
      ),
      React.createElement(
        'button',
        { onClick: this.increment, className: classNames({ cta: this.state.cta }) },
        '+'
      )
    );
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number,
  cta: PropTypes.bool
};

export default Counter;
