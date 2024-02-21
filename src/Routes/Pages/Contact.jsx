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
      <Container fluid className="contact-container">
        <img src={ContactBanner} className="banner-image"/>
        <Row>
          <Col>
            <h2>Contact Us</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Location</h3>
            <p>1158 Club Rd NE</p>
            <p>Cedar Rapids, IA 52333</p>
            <p>United States</p>
          </Col>
          <Col>
            <img src={Patio} className="contact-image"/>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Hours:</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Sunday</p>
          </Col>
          <Col>
            <p>8:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Monday</p>
          </Col>
          <Col>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Tuesday</p>
          </Col>
          <Col>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Wednesday</p>
          </Col>
          <Col>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Thursday</p>
          </Col>
          <Col>
            <p>11:00AM-10:00PM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Friday</p>
          </Col>
          <Col>
            <p>11:00AM-1:00AM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Saturday</p>
          </Col>
          <Col>
            <p>8:00AM-1:00AM</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Phone Number</h3>
            <p>319-848-2220</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Feel free to give us a call to reserve a table or discuss catering options! For other inquiries, click below:</p>
          </Col>
        </Row>

        <Button/>


      </Container>
    </>
  )
}
