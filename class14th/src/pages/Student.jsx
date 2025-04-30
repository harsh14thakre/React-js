import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


const Student=()=>{
    const [input, setInput]= useState({}); 
     const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
     }
     
     const handleSubmit=async(e)=>{
        e.preventDefault();   
        let api="http://localhost:3000/Employee";
         const response = await axios.post(api, input);
         setInput({
          rollno:"",
          name:"",
          city:"",
          fees:""
       })
       
     }

    return(
        <>
          <h1 align="center">Student Page</h1>
        <div id="myfrm">
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name.</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name="city" value={input.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter fees</Form.Label>
        <Form.Control type="text" name="fees" value={input.fees} onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    <ToastContainer />
        </>
    )
}
export default Student;