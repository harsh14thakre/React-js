import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../images/sliderimg1.webp"
import slider2 from "../images/sliderimg2.webp"
import slider3 from "../images/sliderimg3.webp"

import Card from 'react-bootstrap/Card';
const Home=()=>{
    return(
        <>

        
        <video webkit-playsinline="true" x5-playsinline="true" autoplay="autoplay" src="https://image01.realme.net/general/20250521/1747823334696c69591d3a2bd4447a0764d1decaf1083.mp4" poster="https://image01.realme.net/general/20250521/174780191105713ccc1b2304a4bc3bce23b5d9d9e73d4.jpg?size=707491&amp;width=5120&amp;height=1270" muted="muted" loop="loop" class="video-box"></video>
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
       <img src={slider1}  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Body>
       <img src={slider1}  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Body>
       <img src={slider1}  width="100%" height="100%"/>
      </Card.Body>
    </Card> 

    </div>
    </div>
    <br /><br />


    {/* ------------------------------------------------------------------------------------------------------ */}

    <div id='imgsection'>
      <div><img src="https://image01.realme.net/general/20250403/1743674073189d0e0f764cc2f4179b7caa72d1b65cd10.jpg.webp" alt="" style={{ width:"100%", height:"100%"}}/></div>
      <div><img src="https://image01.realme.net/general/20250523/17479810278661c7eeee154b149e89a4fb8cd89812c53.jpg.webp" alt="" style={{ width: "100%", height:"100%"}}/></div>
      <div><img src="https://image01.realme.net/general/20250521/174782048762745d92f50fa3b432cbe14a546e27d80c8.jpg.webp" alt="" style={{ width: "100%", height:"100%"}} /></div>
      <div><img src="https://image01.realme.net/general/20240816/17237952217290cfd29a8486c4a519e875f1729d3cd6d.png.webp" alt="" style={{ width:"100%", height:"100%"}}/></div>
    </div>
    <br /><br />
        </>
    )
}
export default Home;