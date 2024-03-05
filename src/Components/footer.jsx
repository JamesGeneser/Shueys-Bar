
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'

function Footer() {




return(
<>
    <Container fluid className="footer-container">
        <Row className="d-flex justify-content-between">
            <Col xs={6} lg={2}>
                <img src={ShueysLogo} alt="Shueys Logo" className="image"/>
            </Col>
            <Col xs={3} lg={1}>
                <img className="mt-5 pt-5" src={FacebookLogo} alt="Facebook Logo"/>
            </Col>
            <Col className="" lg={3}>
                <p className="footer-heading">Hours:</p>
                    <Row>
                        <Col className="p-0" lg={4}>
                            <p className="footer-text">Sun-Thu</p>
                        </Col>
                        <Col lg={8}>
                            <p className="footer-text">
                                11:00am-10:00pm
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0" lg={4}>
                            <p className="footer-text">Fri-Sat</p>
                        </Col>
                        <Col lg={8}>
                            <p className="footer-text">8:00AM-1:00AM</p>
                        </Col>
                    </Row>
            </Col>

            <Col lg={3}>
                <p className="footer-heading">Location:</p>
                    <Row>
                        <Col>
                            <p className="footer-text">1158 Club Rd NE</p>
                            <p className="footer-text">Cedar Rapids, IA 52333</p>
                        </Col>
                    </Row>
            </Col>
        </Row>
    </Container>
</>

);


}

export default Footer;