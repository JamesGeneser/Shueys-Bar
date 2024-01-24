
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu (){
    return(
       <>
      
    <Container>
<h1>Menu</h1>
        <Row>
            <Col><p>specials</p></Col>
            <Col><p>img</p></Col>
        </Row>

        <Row>
            <Col><p>happy hour</p></Col>
            <Col><p>img</p></Col>
        </Row>
        </Container>
        </>
        )
}

export default Menu;