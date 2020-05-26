import React, { Component } from 'react';

import Header from './header';
import Content from './content';

class Home extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      title: 'Counter',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <Header title={title} />
        <Content />
      </div>
    );
  }
}

export default Home;
