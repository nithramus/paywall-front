import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">NewGoogle</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Pricing</Nav.Link>
          <Nav.Link href="#home">Fonctionnalités</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="#features">Login</Nav.Link>
          <Nav.Link href="#pricing">S'inscrire</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
