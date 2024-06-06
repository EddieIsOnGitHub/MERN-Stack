import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AddReview from "./components/add-review"
import MoviesList from "./components/movies-list"
import Movie from "./components/movie"
import Login from "./components/login"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


function App() {
  const [user, setUser] = React.useState(null)
  async function login(user = null) {// default user to null
    setUser(user)
  }
  async function logout() {
    setUser(null)
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to={"/movies"}>Movies</Link></Nav.Link>
            <Nav.Link href="#link">{user ? (
              <a onClick={logout}>Logout User</a>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
