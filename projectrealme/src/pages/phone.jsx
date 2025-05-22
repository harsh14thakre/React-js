import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import BackEndURL from "../config/BackendUrl";

import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../images/sliderimg1.webp"
import slider2 from "../images/sliderimg2.webp"
import slider3 from "../images/sliderimg3.webp"

const Phone = () => {
    const [MyData, setMyData] = useState([]);
    const dispatch= useDispatch();
    const LoadData = async () => {
       
            const response = await axios.get(BackEndURL);
            setMyData(response.data);
       
            console.log(response);
        }
    

    useEffect(() => {
        LoadData();
    }, []);

    const ans = MyData.map((key) =>{
        return(
            <>


            <Card style={{ width: '18rem' }} className="mb-4 shadow-sm">
      <Card.Img variant="top" src={key.img} alt={key.name} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text><strong>Price: ${key.price}</strong></Card.Text>
        </div>
        <Button variant="primary" className="mt-3"

             onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key. category, image:key.image, qnty:1,    price:key.price }))}}
         >Add To Cart</Button>
      </Card.Body>
    </Card>
            </>
        )
    //    <div style={{}}>
       
//    </div>
});

    return (
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


            <h1>This is Phone</h1>
            <div id="Phoneproduct">
            {ans}
            </div>
        </>
    );

}
export default Phone;
