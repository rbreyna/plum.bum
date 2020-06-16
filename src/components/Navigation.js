import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img id="nav-logo" src="./assets/images/plumbum-main.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/">Join</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
