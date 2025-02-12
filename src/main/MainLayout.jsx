import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import { useTheme } from "../hooks/useTheme";


const MainLayout = () => {
     const {theme} = useTheme()
    return (
        <div className={`${theme?"bg-gray-900 text-gray-100": "bg-slate-100 text-black"}`}>
           <NavBar></NavBar> 
           <div className="min-h-[calc(100vh-90px)]">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;