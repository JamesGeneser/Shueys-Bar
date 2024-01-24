
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {



return(
    <>
    <Container fluid className='p-0'>
      
    <Image  className='welcome-image m-0' src="/assets/place-holder.jpg" />

    <Row className="text-center">
  
        <h2 className='heading'>specials</h2>

    </Row>

    <Row>
        <Col sm={12}> <hr/>
        <hr/>
        <hr/>
        <hr/></Col>

        <Col>
        <Image className='specials-image m-4' src="/assets/place-holder.jpg"  /></Col>
       
    </Row>

    <Row>
        <Col><p>happy hour</p></Col>
        <Col><p>img</p></Col>
    </Row>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis dignissimos corporis eos dolorum magnam, similique, molestias distinctio consequuntur sunt eligendi ab animi? Laborum quos ipsa est ipsum error suscipit cumque quis ullam officia. Aut, commodi? Dicta distinctio illo unde.</p>

    </Container>

    </>
)
}