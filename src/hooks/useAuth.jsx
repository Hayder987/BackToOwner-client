import { useContext } from "react";
import { AuthContext } from "../context/authContext";



const useAuth = () => {
     const getAuth = useContext(AuthContext)
     return getAuth;
};

export default useAuth;