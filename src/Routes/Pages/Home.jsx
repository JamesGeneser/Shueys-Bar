
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeBarView from '../../images/HomeBarView.png';
import Pancakes from '../../images/Pancakes.png';
import Windows from '../../images/WindowPatioView.png';
import FacebookFeed from '../../images/FacebookFeed.png';

export default function Home() {



return(
    <>
    <Container fluid className='p-0'>
    
      <img fluid src={HomeBarView} alt='View of Shueys Bar' className='image'/>
  

      <Row className="text-center mt-3">

        <Col xs={12 } lg={6} className="special-events m-2">
  
            <h2 className='heading'>Special Events</h2>
            <p>Come on by for some breakfast at Shuey’s! Pancakes, eggs, and more are served from 8:00am - 11:00am on Saturdays and Sundays. You can also join us for DJ Trivia Nights every Wednesday at 6:30pm! For more information on upcoming events, follow the Shuey’s Restaurant & Lounge Facebook page.</p>
        </Col>

    <Col xs={12} lg={6} className="pancakes">
    <img src={Pancakes} alt='Pancakes'/>
        </Col>
</Row>


    <Row className="text-center mt-3">
  
        <h2 className='heading'>Happy Hour</h2>

    </Row>

    <Row className='text-center'> 
        <Col xs={12} className="specials m-2"> 
    <p>Shuey’s serves a variety of domestic and imported beers with a full services bar. We also offer soft drink Coke products. Stop by our weekday happy hour from 2:30pm - 5:30pm for $1.00 off of wells and domestics!</p>
        </Col>

    </Row>

    <Row className="text-center">
        <Col><img src={Windows} alt='View of patio through the windows'></img></Col>
    </Row>
    <Row className='text-center'>
        <Col><h2 className='heading'>Follow us on Facebook</h2>
        <p>Click below to learn about upcoming events or buy a Shuey’s giftcard!</p>
        </Col>
       
    </Row>

    <Row>
        <Col><img fluid src={FacebookFeed} alt='Live link to Shueys Facebook page and gallery' className='image'/></Col>
    </Row>


    </Container>

    </>
)
}