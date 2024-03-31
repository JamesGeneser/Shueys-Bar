import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import SlideMenu from "./slide-menu";
import { useState } from 'react';

import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'
import HamburgerButton from '../images/HamburgerButton.png'


function Navigation() {


  return (
    <div>
    <Navbar   className="p-4 mt-0 pt-0 py-0">
      <Container fluid className="navigation-container">


      <Row >
   
          <Col xs={6} sm={4} md={3} lg={3}>
            <img src={ShueysLogo} alt="Shueys Logo" className="image shueys-logo m-1"/>  
          </Col>

          <Col xs={2} sm={1} className=" d-sm-block d-md-none mt-auto pb-2 text-center">
            <a href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>

          <Col md={6} lg={6} className="mt-auto mb-0 d-none d-md-block"> 
     
          
    
         
          <Navbar className=" d-flex align-items-baseline"> 
              <Nav className="bebas gap-4 ">
            
                <Navbar.Text className="navigation-item"  as={NavLink} to="Shueys-Bar/">Home</Navbar.Text>
                <Navbar.Text className="navigation-item"  as={NavLink} to="Shueys-Bar/menu">Menu</Navbar.Text>
                <Navbar.Text className="navigation-item"  as={NavLink} to="Shueys-Bar/contact">Contact</Navbar.Text>
                <Navbar.Text className="navigation-item"  as={NavLink} to="Shueys-Bar/about">About</Navbar.Text>
                <Navbar.Text className="navigation-item"  as={NavLink} to="Shueys-Bar/apply">Apply</Navbar.Text>
              </Nav>
          </Navbar>
          
          </Col>

          <Col xs={2} lg={2} className="d-none d-md-block mt-auto pb-3 ms-5">
            <a className="d-flex justify-content-end" href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>

          <Col xs={2} className="d-flex align-items-end ms-4">
          <SlideMenu />
          </Col>
              
 
             
        

      </Row>
        
   
      </Container>
      
    </Navbar>
    <Outlet/>
</div>
  );
}

export default Navigation;
