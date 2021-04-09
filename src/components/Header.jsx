import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styling/Header.css";
import bot from "../assets/bot.gif";

function Header() {
  return (
    <Navbar expand="xl" className="header" data-aos="fade-right">
      <Nav.Link className="header__navLink">
        <Navbar.Brand className="header__home">
          <img
            src={bot}
            alt=""
            style={{ height: "40px", width: "40px", marginBottom: "3px" }}
          />
          <span>
            <i>SmartBot</i>
          </span>
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="header__link">
            <span className="active">Pricing</span>
          </Nav.Link>
          <Nav.Link className="header__link">
            <span>Features</span>
          </Nav.Link>
          <Nav.Link className="header__link">
            <span>Integration</span>
          </Nav.Link>
          <Nav.Link className="header__link">
            <span>About us</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
