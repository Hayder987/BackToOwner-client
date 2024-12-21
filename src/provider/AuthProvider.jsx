import PropTypes from "prop-types";
import { AuthContext } from "../context/authContext";


const AuthProvider = ({children}) => {

    const registerUser =(email, password)=>{

    }

    const authInfo ={

    }

    return(
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}

export default AuthProvider;