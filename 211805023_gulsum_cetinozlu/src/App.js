import './App.css';
import ListComponent from './ListComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormComponent from './FormComponent';
import { Form } from 'react-bootstrap';
import GameComponent from './GameComponent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as = {Link} to="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to ="/home">Home Page</Nav.Link>
            <Nav.Link as = {Link} to ="/list">List</Nav.Link>
            <Nav.Link as = {Link} to ="/form">Slider</Nav.Link>
            <Nav.Link as = {Link} to ="/nerdle">NERDLE</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as = {Link} to="/slider">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>

    <div>
      <Routes>
      <Route path='home' element={<Home/>}></Route>
        <Route path='list' element={<ListComponent/>}></Route>
        <Route path='slider' element={<SliderComponent/>}></Route>
        <Route path='form' element={<FormComponent/>}></Route>
        <Route path='nerdle' element={<GameComponent/>}></Route>
      </Routes>
    </div>

    </BrowserRouter>
    </div>
  );
}

const Home = () =>(
  <div>
    Home Page
  </div>
);

export default App;
