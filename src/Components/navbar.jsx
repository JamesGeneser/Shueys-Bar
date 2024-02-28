import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'


function Navigation() {
  return (
    <div>
    <Navbar  expand="lg" className="bg-body-tertiary p-0">
      <Container fluid className="navigation-container">


      <Row className="mt-4">
        {/* <Navbar.Brand className="shueys-brand mt-5 p-2" as={NavLink} to="/" > */}
          <Col xs={6} sm={2} md={3} lg={2}>
            <img src={ShueysLogo} alt="Shueys Logo" className=" image"/>  
          </Col>
        {/* </Navbar.Brand> */}
          <Col xs={2} lg={1} className="d-none d-sm-block d-md-none mt-5 mb-0 pt-5 ps-0">
            <a href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>

          <Col xs={2} md={6} lg={9} className="mt-auto mb-0 pt-4"> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar">
              <Nav className="bebas gap-5 mt-auto">
                <Nav.Link  as={NavLink} to="Shueys-Bar/">Home</Nav.Link>
                <Nav.Link  as={NavLink} to="Shueys-Bar/menu">Menu</Nav.Link>
                <Nav.Link  as={NavLink} to="Shueys-Bar/contact">Contact</Nav.Link>
                <Nav.Link  as={NavLink} to="Shueys-Bar/about">About</Nav.Link>
                <Nav.Link  as={NavLink} to="Shueys-Bar/apply">Apply</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          
          </Col>

          <Col xs={2} lg={1} className="d-none d-md-block mt-auto pt-5 ps-0">
            <a href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>
        

      </Row>
        
   
      </Container>
    </Navbar>
    <Outlet/>
</div>
  );
}

export default Navigation;
