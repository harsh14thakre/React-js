import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";

const Layout=()=>{
    
    return(
        <>
        <Topbar/>
        <br />
        <Outlet/>
        <br />
        <Footer/>
        </>
    )
}
export default Layout;
