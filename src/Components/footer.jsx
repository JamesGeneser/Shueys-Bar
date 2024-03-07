
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'

function Footer() {




return(
<>
    <Container fluid className="footer-container">
        <Row className="">
            <Col xs={8} md={4} lg={2}>
                <img src={ShueysLogo} alt="Shueys Logo" className="image"/>
            </Col>
            <Col className="d-flex flex-column justify-content-left mt-4" xs={3} sm={4} md={3} lg={1}>
                <img className="mt-5 pt-5 facebook-logo-footer" src={FacebookLogo} alt="Facebook Logo"/>
                <p className="me-auto mt-4 mb-0">©2024</p>
                <p className="d-none d-sm-block me-auto">Site Design by Madison Stahl</p>
            </Col>

       
            <Col className="d-none d-sm-none d-md-block" md={4} lg={4} xl={4}>
                <p className="footer-heading">Hours:</p>
                    <Row>
                        <Col className="p-0" md={6} lg={4}>
                            <p className="footer-text">Sun-Thu</p>
                        </Col>
                        <Col md={6} lg={5}>
                            <p className="footer-text">
                                11:00am-10:00pm
                            </p>
                        </Col>
                   
                    </Row>
                    <Row>
                        <Col className="p-0" md={6} lg={4}>
                            <p className="footer-text">Fri-Sat</p>
                        </Col>
                        <Col md={6} lg={4}>
                            <p className="footer-text">8:00AM-1:00AM</p>
                        </Col>
                    </Row>
                    <div className="d-none d-md-block d-lg-none">
                            <p className="footer-heading">Location:</p>
                            <p className="footer-text mb-1">1158 Club Rd NE</p>
                            <p className="footer-text ">Cedar Rapids, IA 52333</p>
                    </div> 
            </Col>

            <Col className="d-none d-sm-none d-md-none d-lg-block" lg={4} >
                <p className="footer-heading">Location:</p>
                    <Row>
                        <Col>
                            <p className="footer-text mb-1">1158 Club Rd NE</p>
                            <p className="footer-text ">Cedar Rapids, IA 52333</p>
                        </Col>
                    </Row>
            </Col>
      
            
        </Row>
    </Container>
</>

);


}

export default Footer;