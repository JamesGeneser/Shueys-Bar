import React from 'react'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyBanner from '../../images/apply-banner.jpeg';

export default function Apply() {
  return (
    <>
    <Container fluid className="apply-container">
      <img src={ApplyBanner} className="banner-image"/>
      <Row>
        <Col>
          <h2>Want to Work With Us?</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>If you’d like to become a part of the Shuey’s family, fill out the application interest form below! You will be contacted at a later date with further information/instructions.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Contact Form</h2>
        </Col>
      </Row>
    </Container>
    </>
  )
}
