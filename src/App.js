import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./sass/style.scss";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import News from "./components/news/News";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container className="d-flex flex-row align-items-stretch">
            <Navbar.Brand className="logo" href="/">
              The YAY Company
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} className="nav-link" exact to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} className="nav-link" to="/news">
                  News
                </Nav.Link>
                <Nav.Link as={NavLink} className="nav-link" to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <InputGroup className="float-lg-end w-auto search">
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  className="search__input"
                />
                <Button variant="primary" className="search__button">
                  Go
                </Button>
              </InputGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Navbar className="footer" expand="lg" variant="light">
          <Container className="footer__cont">
            <Row className="footer__row d-flex justify-content-between py-3 py-sm-0">
              <Col
                className="footer__col mb-3 mb-sm-0 text-center text-sm-start"
                sm
              >
                <img className="footer__icon" src="images/icons/vimeo.svg" />
                <img className="footer__icon" src="images/icons/youtube.svg" />
              </Col>
              <Col className="footer__col text-md-center">hello@yay.com</Col>
              <Col className="footer__col text-end">Copyright 2020</Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
