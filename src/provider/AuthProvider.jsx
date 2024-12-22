import PropTypes from "prop-types";
import { AuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const AuthProvider = ({children}) => {
    const [user, setUser]= useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const registerUser =(email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, imgPath)=>{
        return updateProfile(auth.currentUser, {displayName:name, photoURL:imgPath})
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
      const unsubsCribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>{
        unsubsCribe()
      }
    },[])


    const authInfo ={
        user,
        loading,
        registerUser,
        updateUser,
        loginUser,
        googleLogin
    }

    console.log(user)

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