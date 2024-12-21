import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import LostAndFound from "../pages/LostAndFound";
import AddLostAndFound from "../pages/AddLostAndFound";
import ManageMyItem from "../pages/ManageMyItem";
import AllRecovered from "../pages/AllRecovered";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/lostandfound', element:<LostAndFound></LostAndFound>},
            {path:'/addlostfound', element:<AddLostAndFound></AddLostAndFound>},
            {path:'/managemyitem', element:<ManageMyItem></ManageMyItem> },
            {path:'/allrecovered', element:<AllRecovered></AllRecovered>}

        ]
    }
])

export {router}