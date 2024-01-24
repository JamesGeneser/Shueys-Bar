import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Navigation() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="shueys-brand mt-5 p-2" as={NavLink} to="/" >Shueys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-5" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/apply">Apply</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
</div>
  );
}

export default Navigation;
