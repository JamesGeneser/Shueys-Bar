import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyBanner from '../../images/apply-banner.jpeg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Apply() {
  return (
    <>
    <img src={ApplyBanner} className="image"/>
    <Container fluid className="apply-container m-4 d-flex flex-column justify-content-center">

      <Row className='text-center mt-4'>
        <Col>
          <h2 className='heading'>Want to Work With Us?</h2>
        </Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col>
          <p className='public-sans'>If you’d like to become a part of the Shuey’s family, fill out the application interest form below! You will be contacted at a later date with further information/instructions.</p>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col  className='d-flex flex-column align-items-center mt-4 contact-column'>
          <h2 className='sub-heading bebas'>Contact Form</h2>

          <Form className='pt-2 m-1 mb-4 form align-items-center'>

            <Form.Group className="mb-3 m-4 form-input" controlId="FirstLastName">
              <Form.Label variant="dark" className='mt-4 form-text d-flex justify-content-left'>First and last name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="Email">
              <Form.Label className='form-text d-flex justify-content-left'>Email address</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="Position">
              <Form.Label className='form-text d-flex justify-content-left'>Position you're applying for</Form.Label>
              <Form.Control type="position" />
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="ShortAnswer">
              <Form.Label className='form-text d-flex justify-content-left'>Tell us why you want to work at Shuey's</Form.Label>

             <Form.Control as="textarea" rows={3}/>
            </Form.Group>

                  <Button variant="primary" type="submit" className='button mb-4'>
                  Submit
                  </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}
