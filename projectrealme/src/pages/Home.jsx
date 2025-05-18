import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../images/sliderimg1.webp"
import slider2 from "../images/sliderimg2.webp"
import slider3 from "../images/sliderimg3.webp"

import Card from 'react-bootstrap/Card';
const Home=()=>{
    return(
        <>
         <Carousel>
      <Carousel.Item interval={400}>
        <img src={slider1} alt=""  width="100%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={400}>
        <img src={slider2} alt=""  width="100%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
        <img src={slider3} alt=""  width="100%"/>
      <Carousel.Item interval={400}>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> <br /> <br />

    {/* -------------------------------------------slider end------------------------------------------------- */}
<div >

       <div style={{display:"flex" , flexWrap:"wrap" , }} id='card'>
     <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Body>
       <img src={slider1} alt=""  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Body>
       <img src={slider1} alt=""  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Body>
       <img src={slider1} alt=""  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Body>
       <img src={slider1} alt=""  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

    </div>
    </div>
    <br /><br />


    {/* ------------------------------------------------------------------------------------------------------ */}

    <div id='imgsection'>
      <div><img src="" alt="" /></div>
      <div><img src="" alt="" /></div>
      <div><img src="" alt="" /></div>
      <div><img src="" alt="" /></div>
    </div>
    <br /><br />
        </>
    )
}
export default Home;