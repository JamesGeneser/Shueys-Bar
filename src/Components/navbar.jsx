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


      <Row className="">
        {/* <Navbar.Brand className="shueys-brand mt-5 p-2" as={NavLink} to="/" > */}
          <Col xs={6} sm={5} md={4} lg={3}>
            <img src={ShueysLogo} alt="Shueys Logo" className="image shueys-logo"/>  
          </Col>
        {/* </Navbar.Brand> */}
          <Col xs={2} className="d-none d-sm-block d-md-none mt-auto pb-4 text-center">
            <a href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>

          <Col xs={2} md={6} lg={6} className="mt-auto mb-0 pt-4"> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-4" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar m-2">
              <Nav className="bebas gap-4 mt-auto">
                <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/">Home</Nav.Link>
                <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/menu">Menu</Nav.Link>
                <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/contact">Contact</Nav.Link>
                <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/about">About</Nav.Link>
                <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/apply">Apply</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          
          </Col>

          <Col xs={2} lg={3} className="d-none d-md-block mt-auto pb-4 d-flex flex-row-reverse">
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
