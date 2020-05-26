import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const Movie = ({ movie }) => (
  <Col xl={4} className="mt-4">
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary">Voir</Button>
      </Card.Body>
    </Card>
  </Col>
);

Movie.propTypes = {
  movie: PropTypes.string.isRequired,
};

const ListMovies = ({ data }) => (
  <div>
    <Row>
      {data.map((movie) => <Movie movie={movie} />)}
    </Row>
  </div>
);

ListMovies.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ListMovies;
