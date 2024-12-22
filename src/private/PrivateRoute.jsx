import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import LoaderSpinner from "../components/LoaderSpinner";


const PrivateRoute = ({children}) => {
    const {user, loading } = useAuth()
    const {pathname} = useLocation()
    
    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user){
        return children
    }

    return <Navigate state={pathname} to='/login'></Navigate>
};

export default PrivateRoute;


