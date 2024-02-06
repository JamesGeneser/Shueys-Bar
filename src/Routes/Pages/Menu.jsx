
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu (){
    return(
       <>
      
    <Container>
        <Row className='text-center'><h2>Menu</h2></Row>

        <Row>
            <Col xs="4"><p>Appetizers</p></Col>
            <Col xs="4"><p>Sandwiches</p></Col>
            <Col xs="4"><p>Burgers</p></Col>
            <Col xs="4"><p>Salads</p></Col>
            <Col xs="4"><p>Wraps</p></Col>
            <Col xs="4"><p>Kids Menu</p></Col>
        </Row>

        <Row>
        <h3>Appetizers</h3>
        </Row>
        <Row><p>Each appetizer includes one sauce: Shuey’s Sauce, Ranch, Bleu Cheese, Garlic Parm, BBQ, Buffalo, Sweet Chili, Teriyaki, French, Honey Mustard, Thousand Island, Asian, Peppered Ranch or Balsamic Vinaigrette. Extra sauce - $1.00</p></Row>
        <Container className="appetizer-container">
        <Row><p className='menu-item-title'>Shuey's Fries</p></Row>
        <Row><p className='menu-item-description'>Warm queso topped with fries, bacon bits & fresh herbs. $13.99</p></Row>
        <Row><p className='menu-item-title'>Breaded Mushrooms</p></Row>
        <Row><p className='menu-item-description'>Fried to a deep golden brown. $12.99</p></Row>
        <Row><p className='menu-item-title'>Pretzel Bites</p></Row>
        <Row><p className='menu-item-description'>Delicious soft pretzel bites with queso. $12.99</p></Row>
        <Row><p className='menu-item-title'>Cowboy Bites</p></Row>
        <Row><p className='menu-item-description'>Sweet corn, jalapeños, cream cheese & bacon. $12.99</p></Row>
        <Row><p className='menu-item-title'>Fried Pickle Spears</p></Row>
        <Row><p className='menu-item-description'>Try ’em - you’ll like ‘em. $12.99</p></Row>
        <Row><p className='menu-item-title'>Shotgun Shells</p></Row>
        <Row><p className='menu-item-description'>Breaded cheese curds fried to a golden brown. $12.99</p></Row>
        <Row><p className='menu-item-title'>Chicken Strips & Fries</p></Row>
        <Row><p className='menu-item-description'>Reuben Rolls</p></Row>
        <Row><p className='menu-item-title'>If you like our signature Reuben sandwich, you will love these. Corned beef, Swiss cheese & sauerkraut rolled into a light crust. $12.99</p></Row>
        <Row><p className='menu-item-description'></p></Row>
        <Row><p className='menu-item-title'></p></Row>
        <Row><p className='menu-item-description'></p></Row>
        <Row><p className='menu-item-title'></p></Row>
        <Row><p className='menu-item-description'></p></Row>
        </Container>
        
        </Container>
        </>
        )
}

export default Menu;