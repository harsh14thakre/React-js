import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] = useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=async()=>{
        let api="http://localhost:3000/employee"
        const res=await axios.post(api, input);
        console.log(res);
        alert("data save!!!")
    }
    return(

        <>
        <div id="inp">
        <h1>Insert Page</h1>
       <b>Enter Empno  :</b>  <input type="text" name="empno"  onChange={handleInput}/>
        <br /> <br />
        <b> Enter Name :</b>   <input type="text" name="name" onChange={handleInput}/>
        <br /> <br />
        <b> Enter City :</b>   <input type="text" name="city" onChange={handleInput}/>
        <br /> <br />
        <b> Enter Salary :</b> <input type="text" name="salary" onChange={handleInput}/>
        <br /> <br />
        <button onClick={handleSubmit}>Save!!!</button>     
        </div>   
        </>
    )
}
export default Insert;
