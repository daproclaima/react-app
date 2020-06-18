import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="primary">Movies</Button>
      <Button variant="primary">Series</Button>
      <FormControl type="text" idName="nav-search" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-success">Search</Button>
    </Form>
  </Navbar>
);

export default Navigation;
