import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const TopMenu=()=>{

  const navigate = useNavigate();
  const cartData= useSelector(state=>state.mycart.cart);
  console.log(cartData);
  const cartLength=cartData.length;
    return(
        <>       
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">realmi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="phone" >Phone</Nav.Link>
            <Nav.Link as={Link} to="accessories" >Accessories</Nav.Link>

            <Nav.Link as={Link} to="brand" >Brand</Nav.Link>

            <Nav.Link as={Link} to="search" >Search</Nav.Link>

            <div id="header">
            {cartLength}
          <FaShoppingCart  onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}}/>
          </div>
        
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;