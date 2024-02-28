import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactBanner from '../../images/contact-banner.jpeg';
import Patio from '../../images/patio.jpeg';
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
          <img src={ContactBanner} className="banner-image" fluid/>
      <Container fluid className="contact-container">
   
        <Row className='text-center m-5'>
          <Col >
            <h1 className='heading'>Contact Us</h1>
          </Col>
        </Row>

        <Row className='text-center'>
          <Col className='bebas '>
            <h3 className="mb-3">Location:</h3>
            <p className='m-0 p-0'>1158 Club Rd NE</p>
            <p className='m-0 p-0'>Cedar Rapids, IA 52333</p>
            <p className='m-0 p-0'>United States</p>
          </Col>
       
        </Row>

        <Row className='text-center mt-5'>
          <Col className='bebas'>
            <h3>Hours:</h3>
          </Col>
        </Row>

        <Row className='ms-5'>
          <Col className='bebas'>
            <p>Sunday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>8:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row className='ms-5'>
          <Col className='bebas'>
            <p>Monday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row className='ms-5'>
          <Col className='bebas'>
            <p>Tuesday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row className='ms-5 '>
          <Col className='bebas'>
            <p>Wednesday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row className='ms-5'>
          <Col className='bebas'>
            <p>Thursday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row className='ms-5'>
          <Col className='bebas'>
            <p>Friday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>11:00AM-1:00AM</p>
          </Col>
        </Row>

        <Row className='ms-5'>
          <Col className='bebas '>
            <p >Saturday</p>
          </Col>
          <Col className='bebas d-flex flex-row-reverse me-5'>
            <p>8:00AM-1:00AM</p>
          </Col>
        </Row>

        <Row className='text-center mt-5'>
          <Col className='bebas'>
            <h3 >Phone Number</h3>
            <p>319-848-2220</p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col className='m-5 p-0 border'>
            <img src={Patio} className= "image p-0 m-0"/>
          </Col>
        </Row>

        <Row className='text-center'>
          <Col >
            <p>Feel free to give us a call to reserve a table or discuss catering options! For other inquiries, click below:</p>
          </Col>
        </Row>
        <Row className='text-center mb-3'>
          <Col>
            <Button className='button'> Email us</Button>
          </Col>
        </Row>
 


      </Container>
    </>
  )
}
