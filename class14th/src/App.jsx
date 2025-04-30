import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/insert";
import Display from "./pages/Display";
import Student from "./pages/Student";
import Counter from "./pages/Counter";
const App=()=>{
  return(
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="counter" element={<Counter/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;