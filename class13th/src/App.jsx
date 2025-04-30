import { useState, useRef, useEffect } from "react";

const App=()=>{
    const 
    const cnt=useRef(0);
    useEffect(()=>{
        cntRef.current=cnt.current+1;
    })

    return(
        <>
          <button></button>
          <h1></h1>
          <button></button>
        </>
    )
}
export default App;














// const App=()=>{
//     const [name, setname]=useState="";
//     const cnt=useRef(0);
//     useEffect(()=>{
//         cntRef.current=cnt.current+1;
//     })

//     return(
//         <>
//           Enter your name: <input type="text" value={name}
//           onChange={(e)=>{setname(e.target.value)}}/>
//           <h1>My Render count : {cntRef.current}</h1>
//         </>
//     )
// }
// export default App;













// const App=()=>{
//   const myRef= useRef("");

//   const myFun1=()=>{
//         myRef.current.style.border="2px solid black";
//         myRef.current.style.width="400px";
//         myRef.current.style.height="300px";
//         myRef.current.style.textAlign="center";

//         myRef.current.innerHTML="We learn React JS From Cybrom";
//   }
//   const myFun2=()=>{
//        myRef.current.style.borderRadius="50%";
//        myRef.current.style.backgroundColor="yellow";

//   }
//   const myFun3=()=>{
//     myRef.current.style.fontSize="40px";
//     myRef.current.style.color="green";

// }

//   return(
//     <>
//      <button onClick={myFun1}>Click here</button>
//      <button onClick={myFun2}>Click here</button>
//      <button onClick={myFun3}>Click here</button>
//       <div ref={myRef}>
//         Hello Friends;
//       </div>
//     </>
//   )
// }

// export default App;
















// import { useRef } from "react";

// const App=()=>{
//     const myRef=useRef("");
//     const display=()=>{
//         myRef.current.style.width="300px";
//         myRef.current.style.backgroundColor="red";
//         myRef.current.style.border="3px";
//         myRef.current.style.fontSize="30px";
//         myRef.current.style.margin="auto";
//         // myRef.current.style.width="300px";
//         // myRef.current.style.width="300px";
//     }
//     return(
//         <>
//         <h1 ref={myRef}>Welcome to cybrom Bhopal</h1>
//         <button onClick={display}>click here</button>
//         </>
//     )
// }
// export default App;
























// const App=()=>{
//     const myRef=useRef("");
//     const myFun=()=>{
//         myRef.current.innerHTML="We learn react js";
//     }
//     return(
//         <>
//         <h1 ref={myRef}>Login system!!!</h1>
//         <button onClick={myFun}>click here</button>
//         </>
//     )
// }
// export default App;