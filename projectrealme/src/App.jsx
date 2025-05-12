import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MenWatches from "./pages/MenWatches";
import WoMenWatches from "./pages/WoMenWatches";
import KidsWatches from "./pages/KidsWatches";
const App=()=>{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="store" element={<Store/>}/>
           <Route path="newlaunch" element={<newlaunch/>}/>
           <Route path="phone" element={<audio/>}/>
           <Route path="accessories" element={<accessories/>}/>
          </Route> 
        </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;