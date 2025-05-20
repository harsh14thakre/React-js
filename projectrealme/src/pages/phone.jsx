import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Phone = () => {
    const [MyData, setMyData] = useState([]);

    const LoadData = async () => {
       
            const response = await axios.get("http://localhost:3000/Mobile");
            setMyData(response.data);
       
            console.log(response);
        }
    

    useEffect(() => {
        LoadData();
    }, []);

    const ans = MyData.map((item) =>{
        return(
            <>
            <Card style={{ width: '18rem' }} className="mb-4 shadow-sm">
      <Card.Img variant="top" src={item.img} alt={item.name} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text><strong>Price: ${item.price}</strong></Card.Text>
        </div>
        <Button variant="primary" className="mt-3">Add To Cart</Button>
      </Card.Body>
    </Card>
            </>
        )
    //    <div style={{}}>
       
//    </div>
});

    return (
        <>
            <h1>This is Phone</h1>
            <div id="Phoneproduct">
            {ans}
            </div>
        </>
    );

}
export default Phone;
