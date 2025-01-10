import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import LostAndFound from "../pages/LostAndFound";
import AddLostAndFound from "../pages/AddLostAndFound";
import ManageMyItem from "../pages/ManageMyItem";
import AllRecovered from "../pages/AllRecovered";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../private/PrivateRoute";
import DetailsPAge from "../pages/DetailsPAge";
import UpdatePage from "../pages/UpdatePage";
import FaqPage from "../pages/FaqPage";
import Dashboard from "../pages/Dashboard";
import AllItems from "../pages/dashBoard/AllItems";
import AllUser from "../pages/dashBoard/AllUser";
import AllRecoveredItem from "../pages/dashBoard/AllRecoveredItem";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element:<Register></Register>},
            {path:'/lostandfound', element:<LostAndFound></LostAndFound>,
            loader:()=> fetch(`${import.meta.env.VITE_serverUrl}/pages`)
            },
            {path:'/help', element:<FaqPage></FaqPage>},
            {path:'/items/:id', element:<PrivateRoute><DetailsPAge></DetailsPAge></PrivateRoute>},
            {path:'/addlostfound', element:<PrivateRoute><AddLostAndFound></AddLostAndFound></PrivateRoute>},
            {path:'/managemyitem', element:<PrivateRoute><ManageMyItem></ManageMyItem></PrivateRoute> },
            {path:'/updateItems/:id', element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>},
            {path:'/allrecovered', element:<PrivateRoute><AllRecovered></AllRecovered></PrivateRoute>},
            {path:'dashboard', element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children:[
                    {path:'allItems', element:<AllItems></AllItems>},
                    {path:'allRecoverd', element:<AllRecoveredItem></AllRecoveredItem>},
                    {path:'allUser', element:<AllUser></AllUser>}
                ]
            }

        ]
    }
])

export {router}