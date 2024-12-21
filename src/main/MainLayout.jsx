import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {

    return (
        <div>
           <NavBar></NavBar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;