import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
const TopMenu=()=>{
    return(
        <>       
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">realmi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="newlaunch" >New Launch</Nav.Link>
            <Nav.Link as={Link} to="phone" >Phone</Nav.Link>
            <Nav.Link as={Link} to="audio" >Audio</Nav.Link>
            <Nav.Link as={Link} to="accessories" >Accessories</Nav.Link>

            <Nav.Link as={Link} to="community" >community</Nav.Link>
            <Nav.Link as={Link} to="support" >Support</Nav.Link>
            <Nav.Link as={Link} to="brand" >Brand</Nav.Link>
            <Nav.Link as={Link} to="realmiui" >realmi UI</Nav.Link>

            <Nav.Link as={Link} to="search" >Search</Nav.Link>
            <FaCartPlus style={{color: "white", fontSize: "25px", display: "flex", }} />
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;