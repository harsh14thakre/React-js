import {increment , decrement} from "./counterSlice";
import { useSelector , useDispatch } from "react-redux";

const App=()=>{
    const mycnt = useSelector(state=>state.mycounter.count);
    const dispatch = useDispatch();
  return(
    <>
     <h1>My Counter App :</h1>
     <button onClick={()=>{dispatch(increment())}}>Increment</button>
     <h1>{mycnt}</h1>
     <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App;






































// import { useState, useMemo } from "react";

// const App=()=>{
//   const [add, setAdd]=useState(0);
//   const [sub, setSub]=useState(100);
//   const mymulti=useMemo(()=>{
//     console.log("*****");
//     return add*2;
//   }, [add]);
//   return(
//     <>
//     <h1>Addition : {add}</h1>
//     <button onClick={()=>{setAdd(add+1)}}>Addition</button>
//     <h1>Subtraction : {sub}</h1>
//     <button onClick={()=>{setSub(sub-1)}}>Subtraction</button>
//     <hr />
//     <h2>Multiplication :{mymulti}</h2>
    
//     </>
//   )
// }
// export default App;