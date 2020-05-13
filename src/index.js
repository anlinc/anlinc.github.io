import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Resume from "./Resume";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import {Switch, Route, HashRouter} from "react-router-dom";

const buttonStyle = {
    background: 'transparent',
    border: '1px solid black',
    paddingTop: '2px',
    paddingBottom: '2px',
    color: 'black',
    fontFamily: 'Courier New',
    marginLeft: '18px',
};

const navbarStyle = {
    width: "auto",
    height: "50px",
    position: "fixed",
    top: "0",
    zIndex: "30",
    right: "0%"
};

const pageContainer = {
    display: "inline-block",
    width: "100%",
    position: "absolute",
    top: "0"
};

ReactDOM.render(
  <React.StrictMode>
      <HashRouter basename="/">
          <Switch>
              <Route path="/resume" component={Resume}/>
              <Route path="/" component={Home} exact/>
          </Switch>
          <Navbar bg='transparent' expand='lg' style={navbarStyle}>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='ml-auto'>
                      <Nav.Link style={buttonStyle} href="/#/" id="navbutton">Home</Nav.Link>
                      <Nav.Link style={buttonStyle} href="/#/resume" id="navbutton">Resume</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </HashRouter>
      <div style={pageContainer}>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
