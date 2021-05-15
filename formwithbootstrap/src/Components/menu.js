import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      {/* responsive navbar */}
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand href="#home">IT-Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Developers</Nav.Link>
              <Nav.Link href="#pricing">Hiring</Nav.Link>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Web Developpement
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Othres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Partners</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;