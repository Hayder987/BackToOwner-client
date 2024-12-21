import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {

    return (
        <div className="bg-slate-50">
           <NavBar></NavBar> 
           <div className="min-h-[calc(100vh-90px)]">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;