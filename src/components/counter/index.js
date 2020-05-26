import React, { Component } from 'react';
import Display from './display';

class Counter extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      count: 30,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;

    if (count === 0) {
      clearInterval(this.interval);
    }
  }

  tick() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <Display count={count} />
      </div>
    );
  }
}

export default Counter;
