import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {

    return (
        <div>
           <NavBar></NavBar> 
           <div className="min-h-[calc(100vh-60px)]">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;