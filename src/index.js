import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import About from "./About";
import Gallery from "./Gallery";
import Resume from "./Resume";
import {Nav, Navbar} from "react-bootstrap";
import $ from "jquery";

function scrollToAbout() {
    let nav = $('.About');
    if (nav.length) {
        $("html, body").animate(({
            scrollTop: nav.offset().top
        }));
    }
}

function scrollToHome() {
    let nav = $('.Home');
    if (nav.length) {
        $("html, body").animate(({
            scrollTop: nav.offset().top
        }));
    }
}

function scrollToMemories() {
    let nav = $('.Gallery');
    if (nav.length) {
        $("html, body").animate(({
            scrollTop: nav.offset().top
        }));
    }
}

function scrollToResume() {
    let nav = $('.Resume');
    if (nav.length) {
        $("html, body").animate(({
            scrollTop: nav.offset().top
        }));
    }
}

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
      <Navbar bg='transparent' expand='lg' style={navbarStyle}>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ml-auto'>
                  <Nav.Link style={buttonStyle} onClick={scrollToHome} id="navbutton">Home</Nav.Link>
                  <Nav.Link style={buttonStyle} onClick={scrollToAbout} id="navbutton">About Me</Nav.Link>
                  <Nav.Link style={buttonStyle} onClick={scrollToMemories} id="navbutton">Memories</Nav.Link>
                  <Nav.Link style={buttonStyle} onClick={scrollToResume} id="navbutton">Resume</Nav.Link>
                  {/*<Nav.Link style={buttonStyle}>Projects</Nav.Link>*/}
                  {/*<Nav.Link style={buttonStyle}>Resume</Nav.Link>*/}
              </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div style={pageContainer}>
    <Home />
    <About />
    <Gallery/>
    <Resume/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
