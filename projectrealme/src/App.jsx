import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Newlaunch from "./pages/newlaunch";
import Phone from "./pages/phone";
import Audio from "./pages/audio";
import Accessories from "./pages/accessories";
import Community from "./pages/community";
import Support from "./pages/support";
import Brand from "./pages/brand";
import Realmiui from "./pages/realmiui";

const App=()=>{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="newlaunch" element={<Newlaunch/>}/>
           <Route path="phone" element={<Phone/>}/>
           <Route path="audio" element={<Audio/>}/>
           <Route path="accessories" element={<Accessories/>}/>

           <Route path="community" element={<Community/>}/>
           <Route path="support" element={<Support/>}/>
           <Route path="brand" element={<Brand/>}/>
           <Route path="realmiui" element={<Realmiui/>}/>

          </Route> 
        </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;