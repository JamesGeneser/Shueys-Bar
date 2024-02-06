
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeBarView from '../../images/HomeBarView.png';


export default function Home() {



return(
    <>
    <Container fluid className='p-0'>
      <img src={HomeBarView} alt='View of Shueys Bar'/>


    <Row className="text-center mt-3">
  
        <h2 className='heading'>Specials</h2>

    </Row>

    <Row className='d-flex align-items-center'> 
        <Col xs={12} className="specials"> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque assumenda, recusandae fugit deleniti incidunt, ipsam suscipit fugiat temporibus inventore asperiores facilis, placeat numquam sint odit! Minima aspernatur veritatis et, maiores deserunt consequatur molestiae quae optio perspiciatis a! Quasi, eos.</p>
        </Col>

        {/* <Col xs={10} className=""> */}

       
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