import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";

const Layout=()=>{
    return(
        <>
        <div className="headerPart">
        <TopMenu/>
        </div>
              <Outlet/>           
          <Footer/>
        
        </>
    )
}

export default Layout;