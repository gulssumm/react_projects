import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import ListComponent from './ListComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormComponent from './FormComponent';
import { Form } from 'react-bootstrap';
import StringComponent from './StringComponent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';

function App() {
  const marker = true;
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as = {Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to ="/home">Home Page</Nav.Link>
            <Nav.Link as = {Link} to ="/list">ListComponent</Nav.Link>
            <Nav.Link as = {Link} to ="/form">FormComponent</Nav.Link>
            <Nav.Link as = {Link} to ="/string">StringComponent</Nav.Link>
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
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path='list' element={<ListComponent/>}></Route>
        <Route path='form' element={<FormComponent/>}></Route>
        <Route path='string' element={<StringComponent/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='slider' element={<SliderComponent/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>

    {/*
      <span class="material-symbols-outlined">
        done
      </span>
      <h1 className='custom'> Header 1 </h1>
      { marker? <FirstComponent preTexnpt="Enter for remove" buttonText="Remove"></FirstComponent>
      : <ListComponent name="Gulsum" dept="CSE" gpa="3.5"></ListComponent>}
      <br></br>
      {ShowList()}
      <FirstComponent preText="Enter for add" buttonText="Add"></FirstComponent>
      <FirstComponent preText="Enter for update" buttonText="Update"></FirstComponent>
      <FirstComponent preText="Enter for show" buttonText="Show"></FirstComponent>
    */}

    </div>
  );
}
const Home = () =>(
  <div>
    Home Page
  </div>
);

function ShowList(){
  return(
    <div>
      <ListComponent name="Gulsum" dept="CSE" gpa="3.5"></ListComponent>
      <ListComponent name="Emin" dept="CSE" gpa="3.5"></ListComponent>
    </div>
  )
}

export default App;
