import React, { Component } from 'react';

import Footer from './footer';
import Header from './header';
import Content from './content';

class Home extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      textHeader: null,
    };
  }

  render() {
    const { textHeader } = this.state;

    return (
      <div>
        <Header text={textHeader || 'hello'} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
