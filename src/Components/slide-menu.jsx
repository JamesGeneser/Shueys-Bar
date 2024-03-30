import React from 'react'
import { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShueysLogo from '../images/ShueysLogo.png';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import HamburgerButton from '../images/HamburgerButton.png'

export default function SlideMenu() {

        const [visible, setVisible] = useState(false)

        const toggleVisibility = () => {
            setVisible(!visible)
        }


    return(
        <>

        <button onClick={toggleVisibility} className="d-sm-block d-md-none">
            <img src={HamburgerButton}/>
        </button>
                <div className={visible? "slide-menu-open":"slide-menu-closed"} >
                    <Container fluid className='slide-menu-container bebas text-center'>
                        <img src={ShueysLogo} className="image" alt='Shueys logo'/>
                        <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/">Home</Nav.Link>
                        <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/menu">Menu</Nav.Link>
                        <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/contact">Contact</Nav.Link>
                        <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/about">About</Nav.Link>
                        <Nav.Link className="navigation-item"  as={NavLink} to="Shueys-Bar/apply">Apply</Nav.Link>
                    </Container>
                </div>
                   
                    
        
                
                </>
    )
}




