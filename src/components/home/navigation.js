import React from 'react';

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="primary" /* onClick={() => this.toggleView('movie')} */ >Movies</Button>
      <Button variant="primary" /* onClick={() => this.toggleView('tv')} */>Series</Button>
      <FormControl type="text" idName="nav-search" placeholder="Search" className="mr-sm-2" /* value={input} onChange={(event) => this.handleChange(event)} */ />
      <Button type="submit" variant="outline-success" /* onClick={(event) => this.handleSubmit(event)} */ >Search</Button> 
    </Form>
  </Navbar>
);

export default Navigation;
