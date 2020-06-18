import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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

class ListMovies extends Component {
  constructor() {
    super();
    this.params = {
      api_key: 'd50eac545c84928041a50ccd2cb4945e',
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
    };
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: this.params,
    }).then((res) => {
      this.setState({ data: res.data, isLoading: true });
    });
  }

  toggleView(theme) {
    axios.get('https://api.themoviedb.org/3/discover/$%7Btheme%7D%60', {
      params: theme,
    })
      .then((res) => {
        this.setState({ data: res.data, isLoading: true });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    console.log(input);
    const paramsSubmit = this.params;
    delete paramsSubmit.include_video;
    delete paramsSubmit.sort_by;
    paramsSubmit.query = input;
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: paramsSubmit,
    })
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data, isLoading: true });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return (
        <div>
          <Row>
            {data.map((movie) => <Movie movie={movie} />)}
          </Row>
        </div>
      );
    }

    return (
      <div>
        <Row>
          <Movie movie="chargement" />
        </Row>
      </div>
    );
  }
}

// ListMovies.propTypes = {
//   data: PropTypes.string.isRequired,
//   isLoading: PropTypes.bool,
// };

export default ListMovies;
