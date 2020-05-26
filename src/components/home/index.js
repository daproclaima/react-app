import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import initalState from './initial-state';

import Header from './header';
import Navigation from './navigation';
import ListMovies from './list-movies';

class Home extends Component {
  constructor() {
    super();

    this.state = initalState;
  }

  render() {
    const { title, data } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <Header title={title} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col xl={9}>
            <ListMovies data={data} />
          </Col>
          <Col xl={3}>
            <h1>Login</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
