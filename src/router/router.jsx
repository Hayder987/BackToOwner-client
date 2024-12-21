import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children:[
            {path:'/', element:<Home></Home>},

        ]
    }
])

export {router}