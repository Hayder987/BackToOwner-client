import { Navigate } from "react-router";
import LoaderSpinner from "../components/LoaderSpinner";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminPrivate = ({children}) => {
    const {user, loading } = useAuth()
    const [userData] = useAdmin()
     
    if( loading ){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user && userData?.role==="admin"){
        return children
    }
    return <Navigate to='/'></Navigate>
};

export default AdminPrivate;